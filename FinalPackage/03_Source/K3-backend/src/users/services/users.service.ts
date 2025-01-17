import {Injectable} from '@nestjs/common';
import {CommandBus, QueryBus} from '@nestjs/cqrs';
import {UserDto, UserIdRequestParamsDto} from '../dtos/users.dto';
import {CreateUserCommand} from '../commands/impl/create-user.command';
import {UpdateUserCommand} from '../commands/impl/update-user.command';
import {DeleteUserCommand} from '../commands/impl/delete-user.command';
import {GetUsersQuery} from 'users/queries/impl/get-users.query';
import {FindUserQuery} from 'users/queries/impl/find-user.query';

@Injectable()
export class UsersService {
    constructor(
        private readonly commandBus: CommandBus,
        private readonly queryBus: QueryBus,
    ) {
    }

    async createUser(userDto: UserDto) {
        return await this.commandBus.execute(new CreateUserCommand(userDto));
    }

    async updateUser(userDto: UserDto) {
        return await this.commandBus.execute(new UpdateUserCommand(userDto));
    }

    async deleteUser(userIdDto: UserIdRequestParamsDto) {
        return await this.commandBus.execute(new DeleteUserCommand(userIdDto));
    }

    async findUsers(getUsersQuery: GetUsersQuery) {
        const query = new GetUsersQuery();
        Object.assign(query, getUsersQuery);
        return await this.queryBus.execute(query);
    }

    async findOne(findUserQuery: FindUserQuery): Promise<UserDto> {
        const query = new FindUserQuery(findUserQuery.id);
        return await this.queryBus.execute(query);
    }
}
