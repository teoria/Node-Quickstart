import {Server, IReply, Request} from "hapi";

import {Router} from '../../shared';
import {UserValidator} from '../validators/user.validator';
import {UserController} from "../controllers/user.controller";

export class UserRouter extends Router {

    constructor(server: Server) {
        super(server);
    }

    /** @override */
    protected registerRoutes(): void {

        let userValidator: UserValidator = new UserValidator();
        let userController: UserController = new UserController();

        this.server.route({
            method: Router.GET,
            path: '/users',
            handler: userController.getUsers,
            config: {
                validate: {
                    query: userValidator.GET_USERS
                }
            }
        });

    }

}