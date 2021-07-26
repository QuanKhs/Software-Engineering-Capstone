import { ICommand } from "@nestjs/cqrs";

export class WelcomeBucketCommand implements ICommand {
  constructor(public readonly bucketId: string) {}
}
