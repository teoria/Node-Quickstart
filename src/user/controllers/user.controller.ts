import * as Boom from 'boom';
import { IReply, Request } from 'hapi';
import { Error } from 'sequelize';

import { User } from '../models/user.model';
import { UsersGetCommand } from './commands/users-get.command';

export class UserController {

    public getUsers(request: Request, reply: IReply): void {

        let command: UsersGetCommand = new UsersGetCommand();
        let promise: Promise<User[]> = command.execute();

        promise
            .then(users => reply({ users: users }))
            .catch(err => reply(Boom.conflict("Unexpected error", { errors: err.errors })));

    }

}