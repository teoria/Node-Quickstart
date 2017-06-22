import { Server, IReply, Request } from "hapi";

import { RouteParams } from "./route-params.model";
import { IRoute } from "./route.interface";
import { Facade } from "sinkmvc";

export class Router {

    public static GET: string = "GET";
    public static CREATE: string = "POST";
    public static UPDATE: string = "PUT";
    public static DELETE: string = "DELETE";

    protected server: Server;

    constructor(server: Server) {

        this.server = server;

        this.registerRoutes();
        this.registerCommands();

    }

    protected registerRoutes(): void { }
    protected registerCommands(): void { }

    protected addRoute(route: IRoute): void {

        this.server.route({
            method: route.method,
            path: route.path,
            handler: (request: Request, reply: IReply) => {

                let routeParams: RouteParams = new RouteParams({
                    request: request,
                    reply: reply
                });

                Facade.sendNotification(route.notification, routeParams);

            },
            config: route.config
        });

    }

}