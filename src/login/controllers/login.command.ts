import { Command, Facade, INotification } from 'sinkmvc';

import { Security, IRouteParams } from "../../shared";
import { LoginNotifications } from "../notifications/login.notification";

export class LoginCommand extends Command {

    constructor() {
        super();
    }

    public execute(notification: INotification): void {

        let routeParams: IRouteParams = notification.getBody();
        let query: Object = routeParams.request.query;
        let security = new Security();

        let token: string = security.getToken({
            id_user: '1'
        });

        routeParams.reply({
            token: token
        });

    }

}