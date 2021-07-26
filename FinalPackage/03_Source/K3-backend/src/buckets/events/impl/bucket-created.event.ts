import { IEvent } from "@nestjs/cqrs";
import { BucketDto } from "../../dtos/buckets.dto";

export class BucketCreatedEvent implements IEvent {
  constructor(public readonly bucketDto: BucketDto) {}
}
