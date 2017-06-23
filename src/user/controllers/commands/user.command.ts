import * as Boom from 'boom';
import { Command, Facade, INotification } from 'sinkmvc';

import { IRouteParams, Security } from '../../../shared/index';
import { UserDAO } from '../../models/dao/user.dao';

export class UserCommand extends Command {

    constructor() {
        super();
    }

    public execute(notification: INotification): void {

        let routeParams: IRouteParams = notification.getBody();
        let userDAO: UserDAO = new UserDAO();
        let promise: Promise<Object[]> = userDAO.getUsers();
        
        promise.then(response => this.onSuccessGetUsers(response, routeParams));
        
    }

    private onSuccessGetUsers(response: Object[], routeParams: IRouteParams): void {
        
        console.log(response);
        routeParams.reply('');

    }

}