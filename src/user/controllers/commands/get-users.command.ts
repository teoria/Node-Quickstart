import * as Boom from 'boom';
import { IReply, Request } from "hapi";
import { Error } from 'sequelize';

import { Security, SequelizeResponseFactory, ISequelizeResponse } from '../../../shared';
import { UserDAO } from '../../models/dao/user.dao';

export class GetUsersCommand {

    private request: Request; 
    private reply: IReply;

    constructor(request: Request, reply: IReply) {
        
        this.request = request;
        this.reply = reply;

    }

    public execute(): void {

        let userDAO: UserDAO = new UserDAO();
        let promise: Promise<ISequelizeResponse[]> = userDAO.getUsers();

        promise
            .then((sequelizeResponse: ISequelizeResponse[]) => this.onSuccessGetUsers(sequelizeResponse))
            .catch((err: Error) => this.onFailureGetUsers(err));

    }

    private onSuccessGetUsers(sequelizeResponse: ISequelizeResponse[]): void {

        let factory: SequelizeResponseFactory = new SequelizeResponseFactory();
        let data: Object[] = factory.create(sequelizeResponse);

        this.reply({
            users: data
        });

    }

    private onFailureGetUsers(err: Error): void {

        console.error(err);

        this.reply(Boom.conflict("Unexpected error", { errors: err.errors }));

    }

}