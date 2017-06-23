"use strict";
/// <reference path="../typings/index.d.ts" />
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server");
const index_1 = require("./shared/index");
const autoload_1 = require("./autoload");
//Load configurations file
index_1.Configuration.load();
//Starting Application Server
let appServer = new server_1.AppServer();
appServer.start();
appServer.register().then(() => {
    let autoLoad = new autoload_1.Autoload();
    autoLoad.loadRoutes(appServer.getServer());
});
