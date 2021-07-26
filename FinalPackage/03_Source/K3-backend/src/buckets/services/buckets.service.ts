import {Injectable} from '@nestjs/common';
import {CommandBus, QueryBus} from '@nestjs/cqrs';
import {BucketDto, BucketIdRequestParamsDto} from '../dtos/buckets.dto';
import {CreateBucketCommand} from '../commands/impl/create-bucket.command';
// import {UpdateBucketCommand} from '../commands/impl/update-bucket.command';
// import {DeleteBucketCommand} from '../commands/impl/delete-bucket.command';
// import {GetBucketsQuery} from 'buckets/queries/impl/get-buckets.query';
// import {FindBucketQuery} from 'buckets/queries/impl/find-bucket.query';

@Injectable()
export class BucketsService {
    constructor(
        private readonly commandBus: CommandBus,
        private readonly queryBus: QueryBus
    ) {
    }

    async createBucket(bucketDto: BucketDto) {
        return await this.commandBus.execute(new CreateBucketCommand(bucketDto));
    }

}
