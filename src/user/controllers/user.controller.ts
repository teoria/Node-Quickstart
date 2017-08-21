import * as Boom from 'boom';
import {IReply, Request} from 'hapi';
import {Error} from 'sequelize';

import {UsersGetCommand} from './commands/users-get.command';
import {User} from "../models/user.model";

export class UserController {

    public async getUsers(request: Request, reply: IReply): Promise<void> {

        try {

            let command: UsersGetCommand = new UsersGetCommand();
            let users: User[] = await command.execute();

            reply({users: users});

        } catch (err) {

            reply(Boom.conflict("Unexpected error", {errors: err.errors}));

        }

    }

}