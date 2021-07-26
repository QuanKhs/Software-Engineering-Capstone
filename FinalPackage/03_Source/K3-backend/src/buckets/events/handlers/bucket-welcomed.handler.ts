import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { BucketWelcomedEvent } from "../impl/bucket-welcomed.event";
import { Logger } from "@nestjs/common";

@EventsHandler(BucketWelcomedEvent)
export class BucketWelcomedHandler
  implements IEventHandler<BucketWelcomedEvent> {
  handle(event: BucketWelcomedEvent) {
    Logger.log(event, "BucketWelcomedEvent"); // write here
  }
}
