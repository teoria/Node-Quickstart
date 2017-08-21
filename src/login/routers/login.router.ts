import {Server, IReply, Request} from "hapi";

import {Router} from '../../shared';
import {LoginController} from '../controllers/login.controller';
import {LoginValidator} from '../validators/login.validator';

export class LoginRouter extends Router {

    constructor(server: Server) {
        super(server);
    }

    /** @override */
    protected registerRoutes(): void {

        let loginValidator: LoginValidator = new LoginValidator();
        let loginController: LoginController = new LoginController();

        this.server.route({
            method: Router.GET,
            path: '/login',
            handler: loginController.login,
            config: {
                // auth: 'bearer',
                validate: {
                    query: loginValidator.LOGIN
                }
            }
        });

    }

}
