import { BucketDto } from "../../dtos/buckets.dto";
import { GetBucketsQuery } from "../impl/get-buckets.query";
import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@QueryHandler(GetBucketsQuery)
export class GetBucketsHandler implements IQueryHandler<GetBucketsQuery> {
  constructor(
    @InjectRepository(BucketDto)
    private readonly repository: Repository<BucketDto>
  ) {}

  async execute(query: GetBucketsQuery) {
    Logger.log("Async GetBucketsQuery...");
    if (query.limit && query.offset)
      return this.repository.find({
        skip: Number(query.offset),
        take: Number(query.limit),
      });
    return this.repository.find();
  }
}
