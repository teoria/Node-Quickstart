import * as Boom from 'boom';
import { Command, Facade, INotification } from 'sinkmvc';
import { Error } from 'sequelize';

import { IRouteParams, Security, SequelizeResponseFactory } from '../../../shared';
import { ISequelizeResponse } from '../../../shared/core/sequelize-response/sequelize-response.interface';
import { UserDAO } from '../../models/dao/user.dao';

export class UserCommand extends Command {

    constructor() {
        super();
    }

    public execute(notification: INotification): void {

        let routeParams: IRouteParams = notification.getBody();
        let userDAO: UserDAO = new UserDAO();
        let promise: Promise<ISequelizeResponse[]> = userDAO.getUsers();

        promise
            .then((sequelizeResponse: ISequelizeResponse[]) => this.onSuccessGetUsers(sequelizeResponse, routeParams))
            .catch((err: Error) => this.onFailureGetUsers(err, routeParams));

    }

    private onSuccessGetUsers(sequelizeResponse: ISequelizeResponse[], routeParams: IRouteParams): void {

        let factory: SequelizeResponseFactory = new SequelizeResponseFactory();
        let data: Object[] = factory.create(sequelizeResponse);

        routeParams.reply({
            users: data
        });

    }

    private onFailureGetUsers(err: Error, routeParams: IRouteParams): void {

        console.error(err);

        routeParams.reply(Boom.conflict("Unexpected error", { errors: err.errors }));

    }

}