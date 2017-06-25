import { Server, IReply, Request } from "hapi";

export class Router {

    public static GET: string = "GET";
    public static CREATE: string = "POST";
    public static UPDATE: string = "PUT";
    public static DELETE: string = "DELETE";

    protected server: Server;

    constructor(server: Server) {

        this.server = server;

        this.registerRoutes();
        
    }

    protected registerRoutes(): void { }

}