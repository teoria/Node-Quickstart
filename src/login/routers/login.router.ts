import { Server } from "hapi";
import { Facade } from "sinkmvc";

import { Router } from '../../shared';
import { LoginNotifications } from '../notifications/login.notification';
import { LoginValidator } from '../validators/login.validator';
import { LoginCommand } from "../controllers/login.command";

export class LoginRouter extends Router {

    constructor(server: Server) {        
        super(server);
    }

    /** @override */
    protected registerRoutes(): void {

        let validator: LoginValidator = new LoginValidator();

        this.addRoute({
            method: Router.GET,
            path: '/login',
            notification: LoginNotifications.LOGIN,
            config: {
                validate: {
                    query: validator.LOGIN
                }
            }
        });

    }

    /** @override */
    protected registerCommands(): void {

        Facade.registerCommand(LoginNotifications.LOGIN, LoginCommand);

    }

}