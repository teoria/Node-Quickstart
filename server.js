"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HapiAuthBearerSimple = require("hapi-auth-bearer-simple");
const hapi_1 = require("hapi");
const shared_1 = require("./shared");
class AppServer {
    constructor() {
        this.server = new hapi_1.Server();
        this.server.connection({
            port: shared_1.Configuration.server.port,
            routes: {
                cors: true
            }
        });
    }
    start() {
        this.server.start(() => console.log('Server running at:', this.server.info.uri));
    }
    getServer() {
        return this.server;
    }
    register() {
        return new Promise((resolve) => {
            this.server.register(HapiAuthBearerSimple, (err) => {
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
    verifyToken(token, callback) {
        let security = new shared_1.Security();
        let data = security.verifyToken(token);
        if (data) {
            callback(null, true, data);
            return;
        }
        callback(null, false, data);
    }
}
exports.AppServer = AppServer;
