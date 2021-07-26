import {CommandHandler, EventPublisher, ICommandHandler} from '@nestjs/cqrs';
import {CreateBucketCommand} from '../impl/create-bucket.command';
import {BucketRepository} from '../../repository/bucket.repository';
import {Logger} from '@nestjs/common';

@CommandHandler(CreateBucketCommand)
export class CreateBucketHandler implements ICommandHandler<CreateBucketCommand> {
    constructor(
        private readonly repository: BucketRepository,
        private readonly publisher: EventPublisher
    ) {
    }

    async execute(command: CreateBucketCommand) {
        Logger.log('Async CreateBucketHandler...', 'CreateBucketCommand');

        const {bucketDto} = command;
        // use mergeObjectContext for dto dispatch events
        const bucket = this.publisher.mergeObjectContext(
            await this.repository.createBucket(bucketDto)
        );
        bucket.commit();
    }
}
