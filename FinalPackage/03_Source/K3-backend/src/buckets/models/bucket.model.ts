import { AggregateRoot } from "@nestjs/cqrs";
import { BucketCreatedEvent } from "../events/impl/bucket-created.event";

export class Bucket extends AggregateRoot {
  [x: string]: any;

  constructor(private readonly id: string | undefined) {
    super();
  }

  setData(data) {
    this.data = data;
  }

  createOrder() {
    this.apply(new BucketCreatedEvent(this.data));
  }
}
