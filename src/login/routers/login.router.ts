import { Server, IReply, Request } from "hapi";
import { Facade } from "sinkmvc";

import { Router } from '../../shared';
import { LoginCommand } from '../controllers/commands/login.command';
import { LoginValidator } from '../validators/login.validator';

export class LoginRouter extends Router {

    constructor(server: Server) {        
        super(server);
    }

    /** @override */
    protected registerRoutes(): void {

        let validator: LoginValidator = new LoginValidator();

        this.server.server({
            method: Router.GET,
            path: '/login',
            handler: this.login,
            config: {
                validate: {
                    query: validator.LOGIN
                }
            }
        });

    }

    private login(request: Request, reply: IReply): void {

        let loginCommand: LoginCommand = new LoginCommand(request, reply);
        loginCommand.execute();

    }

}