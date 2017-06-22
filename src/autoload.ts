import * as fs from "fs";
import * as path from "path";
import { Server } from "hapi";

export default class Autoload {

    constructor() { }

    public loadRoutes(server: Server): void {

        let files: string[] = this.loadAllFilesDirectory(__dirname);
        files.forEach((filePath: string) => {

            if (filePath.indexOf('.router.') >= 0) {
                let Routes: Object = require(filePath);
                for (let key in Routes) {
                    new Routes[key](server);
                }
            }

        });

    }

    private loadAllFilesDirectory(directoryPath: string): string[] {

        let files: string[] = [];

        fs.readdirSync(directoryPath).filter(file => {

            let filePath: string = path.join(directoryPath, file);
            if (fs.statSync(filePath).isFile()) {
                files.push(filePath);
            }

            if (fs.statSync(filePath).isDirectory()) {
                let loadFiles: string[];
                loadFiles = this.loadAllFilesDirectory(filePath);
                loadFiles.forEach((file) => files.push(file));
            }

        });

        return files;

    }

}