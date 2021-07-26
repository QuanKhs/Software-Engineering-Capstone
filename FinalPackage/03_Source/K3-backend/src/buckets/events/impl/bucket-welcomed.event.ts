import { IEvent } from "@nestjs/cqrs";

export class BucketWelcomedEvent implements IEvent {
  constructor(public readonly bucketId: string) {}
}
