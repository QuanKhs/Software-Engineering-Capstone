import {EventsHandler, IEventHandler} from '@nestjs/cqrs';
import {BucketCreatedEvent} from '../impl/bucket-created.event';
import {Logger} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {BucketDto} from '../../dtos/buckets.dto';
import {Repository} from 'typeorm';
import {UsersService} from 'users/services/users.service';
import {FindUserQuery} from 'users/queries/impl/find-user.query';

@EventsHandler(BucketCreatedEvent)
export class BucketCreatedHandler implements IEventHandler<BucketCreatedEvent> {
    constructor(
        @InjectRepository(BucketDto)
        private readonly repository: Repository<BucketDto>,
        private readonly usersService: UsersService
    ) {
    }

    async handle(event: BucketCreatedEvent) {
        Logger.log(event, 'BucketCreatedEvent');
        const bucket = event.bucketDto[0];
        // const findUserQuery = new FindUserQuery();
        // findUserQuery.id = bucket.user.id;
        // bucket.user = await this.usersService.findOne(findUserQuery);
        await this.repository.save(bucket);
    }
}
