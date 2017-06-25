import * as Boom from 'boom';
import { IReply, Request } from "hapi";
import { Error } from 'sequelize';

import { UsersGetCommand } from './commands/users-get.command';

export class UserController {

    public getUsers(request: Request, reply: IReply): void {

        let command: UsersGetCommand = new UsersGetCommand();
        let promise: Promise<Object[]> = command.execute();

        promise
            .then(data => reply({ users: data }))
            .catch(err => reply(Boom.conflict("Unexpected error", { errors: err.errors })));

    }

}