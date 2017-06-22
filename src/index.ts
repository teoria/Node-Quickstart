import { AppServer } from "./server";
import Autoload from "./autoload";
import Configuration from './configuration/configuration';

//Load configurations file
Configuration.load();

//Starting Application Server
let appServer: AppServer = new AppServer();
appServer.start();
appServer.register().then(() => {

    let autoLoad: Autoload = new Autoload();
    autoLoad.loadRoutes(appServer.getServer());

});