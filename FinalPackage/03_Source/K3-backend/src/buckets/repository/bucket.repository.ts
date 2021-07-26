import { Injectable } from "@nestjs/common";
import { Bucket } from "../models/bucket.model";

@Injectable()
export class BucketRepository {
  async createBucket(bucketDto) {
    const bucket = new Bucket(undefined);
    bucket.setData(bucketDto);
    bucket.createBucket();
    return bucket;
  }

  async welcomeBucket(bucketId) {
    const bucket = new Bucket(bucketId);
    bucket.welcomeOrder();
    return bucket;
  }
}
