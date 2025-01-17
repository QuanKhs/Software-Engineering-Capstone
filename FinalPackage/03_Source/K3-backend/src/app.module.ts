import { Module, OnModuleInit } from "@nestjs/common";
import { EventStoreModule } from "./core/event-store/event-store.module";
import {TypeOrmModule} from '@nestjs/typeorm';
import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from "path";
import { UsersService } from "users/services/users.service";
import { UsersModule } from "users/users.module";
import { TokensModule } from "tokens/tokens.module";
import { BucketsModule } from "buckets/bucket.module";
import { config } from "../config";
import { CommandBus, QueryBus } from "@nestjs/cqrs";
import { AuthModule } from "./auth/auth.module";
import { RoleModule } from "./roles/role.module";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...config.DATABASE,
      useUnifiedTopology: true,
      synchronize: false,
      entities: [__dirname + "/../**/*.dto{.ts,.js}"],
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, "..", config.ROOT_PATH),
    }),
    EventStoreModule.forRoot(),
    /** ------------- */
    UsersModule,
    TokensModule,
    BucketsModule,
    AuthModule,
    RoleModule,
  ],
  providers: [UsersService, CommandBus, QueryBus],
})
export class AppModule implements OnModuleInit {
  async onModuleInit() {}
}
