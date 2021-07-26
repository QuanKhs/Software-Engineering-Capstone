import { CommandBus, CqrsModule, EventBus, QueryBus } from "@nestjs/cqrs";
import { Module, OnModuleInit } from "@nestjs/common";
import { CommandHandlers } from "./commands/handlers";
import { EventHandlers } from "./events/handlers";
import { BucketsSagas } from "./sagas/buckets.sagas";
import { BucketsController } from "./controllers/buckets.controller";
import { BucketsService } from "./services/buckets.service";
import { BucketRepository } from "./repository/bucket.repository";
import { EventStoreModule } from "../core/event-store/event-store.module";
import { EventStore } from "../core/event-store/event-store";
import { BucketCreatedEvent } from "./events/impl/bucket-created.event";
import { BucketWelcomedEvent } from "./events/impl/bucket-welcomed.event";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BucketDto } from "./dtos/buckets.dto";
import { QueryHandlers } from "./queries/handler";
import { UsersService } from "users/services/users.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([BucketDto]),
    CqrsModule,
    EventStoreModule.forFeature(),
  ],
  controllers: [BucketsController],
  providers: [
    BucketsService,
    UsersService,
    BucketsSagas,
    ...CommandHandlers,
    ...EventHandlers,
    ...QueryHandlers,
    BucketRepository,
  ],
})
export class BucketsModule implements OnModuleInit {
  constructor(
    private readonly command$: CommandBus,
    private readonly query$: QueryBus,
    private readonly event$: EventBus,
    private readonly bucketsSagas: BucketsSagas,
    private readonly eventStore: EventStore
  ) {}

  onModuleInit() {
    this.eventStore.setEventHandlers(this.eventHandlers);
    this.eventStore.bridgeEventsTo((this.event$ as any).subject$);
    this.event$.publisher = this.eventStore;
    /** ------------ */
    this.event$.register(EventHandlers);
    this.command$.register(CommandHandlers);
    this.query$.register(QueryHandlers);
    this.event$.registerSagas([BucketsSagas]);
  }

  eventHandlers = {
    BucketCreatedEvent: (data) => new BucketCreatedEvent(data),
    BucketWelcomedEvent: (data) => new BucketWelcomedEvent(data),
  };
}
