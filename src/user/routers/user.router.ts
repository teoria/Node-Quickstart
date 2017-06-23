import { Server } from "hapi";
import { Facade } from "sinkmvc";

import { Router } from '../../shared';
import { UserCommand } from '../controllers/commands/user.command';
import { UserNotifications } from '../notifications/user.notifications';
import { UserValidator } from '../validators/user.validator';

export class UserRouter extends Router {

    constructor(server: Server) { 
        super(server);
    }

    /** @override */
    protected registerRoutes(): void {

        let validator: UserValidator = new UserValidator();

        this.addRoute({
            method: Router.GET,
            path: '/users',
            notification: UserNotifications.GET_USERS,
            config: {
                validate: {
                    query: validator.GET_USERS
                }
            }
        });

    }

    /** @override */
    protected registerCommands(): void {

        Facade.registerCommand(UserNotifications.GET_USERS, UserCommand);

    }

}