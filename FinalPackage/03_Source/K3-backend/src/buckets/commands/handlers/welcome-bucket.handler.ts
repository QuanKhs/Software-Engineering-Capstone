import { CommandHandler, EventPublisher, ICommandHandler } from "@nestjs/cqrs";
import { WelcomeBucketCommand } from "../impl/welcome-bucket.command";
import { BucketRepository } from "../../repository/bucket.repository";
import { Logger } from "@nestjs/common";

@CommandHandler(WelcomeBucketCommand)
export class WelcomeBucketHandler
  implements ICommandHandler<WelcomeBucketCommand> {
  constructor(
    private readonly repository: BucketRepository,
    private readonly publisher: EventPublisher
  ) {}

  async execute(command: WelcomeBucketCommand) {
    Logger.log("Async WelcomeBucketHandler...", "WelcomeBucketCommand");
    const { bucketId } = command;
    const bucket = this.publisher.mergeObjectContext(
      await this.repository.welcomeBucket(bucketId)
    );
    bucket.commit();
  }
}
