/// <reference path="../typings/index.d.ts" />

import { AppServer } from "./server";
import { Configuration } from './shared/index';
import { Autoload } from "./autoload";

//Load configurations file
Configuration.load();

//Starting Application Server
let appServer: AppServer = new AppServer();
appServer.start();
appServer.register().then(() => {

    let autoLoad: Autoload = new Autoload();
    autoLoad.loadRoutes(appServer.getServer());

});