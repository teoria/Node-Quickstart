import * as HapiAuthBearerSimple from 'hapi-auth-bearer-simple';
import { Server } from "hapi";

import { Security, Configuration } from "./shared";

export class AppServer {

    private server: Server;

    constructor() {

        this.server = new Server();
        this.server.connection({
            port: Configuration.server.port,
            routes: {
                cors: true
            }
        });

    }

    public start(): void {

        this.server.start(() => console.log('Server running at:', this.server.info.uri));

    }

    public getServer(): Server {

        return this.server;
        
    }

    public register(): Promise<null> {

        return new Promise((resolve) => {
            this.server.register(HapiAuthBearerSimple, (err: Error) => {

                if (err) {
                    throw err;
                }

                this.server.auth.strategy('bearer', 'bearerAuth', false, {
                    validateFunction: this.verifyToken
                });

                resolve();

            });
        });

    }

    private verifyToken(token: string, callback: Function): void {

        let security: Security = new Security();
        let data = security.verifyToken(token);

        if (data) {
            callback(null, true, data);
            return;
        }

        callback(null, false, data);

    }

}