import * as Boom from 'boom';
import { IReply, Request } from "hapi";
import { Error } from 'sequelize';

import { Security } from "../../../shared";

export class LoginCommand {

    private request: Request; 
    private reply: IReply;

    constructor(request: Request, reply: IReply) {
        
        this.request = request;
        this.reply = reply;

    }

    public execute(): void {

        let security = new Security();

        let token: string = security.getToken({
            id_user: '1'
        });

        this.reply({
            token: token
        });

    }

}