import {ICommand} from '@nestjs/cqrs';
import {BucketDto} from '../../dtos/buckets.dto';

export class CreateBucketCommand implements ICommand {
    constructor(public readonly bucketDto: BucketDto) {
    }
}
