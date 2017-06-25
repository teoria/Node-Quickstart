import * as Boom from 'boom';
import { IReply, Request } from 'hapi';
import { Error } from 'sequelize';

import { Security } from "../../shared";

export class LoginController {

    public login(request: Request, reply: IReply): void {

        let security = new Security();
        let token: string = security.getToken({
            id_user: '1'
        });

        reply({ token: token });

    }

}