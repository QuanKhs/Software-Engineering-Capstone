import { Injectable, Logger } from "@nestjs/common";
import { ICommand, ofType, Saga } from "@nestjs/cqrs";
import { BucketCreatedEvent } from "../events/impl/bucket-created.event";
import { WelcomeBucketCommand } from "../commands/impl/welcome-bucket.command";
import { delay, map } from "rxjs/operators";
import { Observable } from "rxjs";

@Injectable()
export class BucketsSagas {
  @Saga()
  bucketCreated = (events$: Observable<any>): Observable<ICommand> => {
    return events$.pipe(
      ofType(BucketCreatedEvent),
      delay(1000),
      map((event) => {
        Logger.log("Inside [BucketsSagas] Saga", "BucketsSagas");
        const bucketId = event.bucketDto[0].id;
        return new WelcomeBucketCommand(bucketId);
      })
    );
  };
}
