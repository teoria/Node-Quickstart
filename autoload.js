"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
class Autoload {
    constructor() { }
    loadRoutes(server) {
        let files = this.loadAllFilesDirectory(__dirname);
        files.forEach((filePath) => {
            if (filePath.indexOf('.router.') >= 0) {
                let Routes = require(filePath);
                for (let key in Routes) {
                    new Routes[key](server);
                }
            }
        });
    }
    loadAllFilesDirectory(directoryPath) {
        let files = [];
        fs.readdirSync(directoryPath).filter(file => {
            let filePath = path.join(directoryPath, file);
            if (fs.statSync(filePath).isFile()) {
                files.push(filePath);
            }
            if (fs.statSync(filePath).isDirectory()) {
                let loadFiles;
                loadFiles = this.loadAllFilesDirectory(filePath);
                loadFiles.forEach((file) => files.push(file));
            }
        });
        return files;
    }
}
exports.Autoload = Autoload;
