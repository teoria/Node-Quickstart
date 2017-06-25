import { Server, IReply, Request } from "hapi";
import { Facade } from "sinkmvc";

import { Router } from '../../shared';
import { GetUsersCommand } from "../controllers/commands/get-users.command";
import { UserValidator } from '../validators/user.validator';

export class UserRouter extends Router {

    constructor(server: Server) {
        super(server);
    }

    /** @override */
    protected registerRoutes(): void {

        let validator: UserValidator = new UserValidator();

        this.server.server({
            method: Router.GET,
            path: '/users',
            handler: this.getUsers,
            config: {
                validate: {
                    query: validator.GET_USERS
                }
            }
        });

    }

    private getUsers(request: Request, reply: IReply): void {

        let command: GetUsersCommand = new GetUsersCommand(request, reply);
        command.execute();

    }

}