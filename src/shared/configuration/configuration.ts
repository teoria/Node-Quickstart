export class Configuration {

    public static server: {
        port: string
    };

    public static load(): void {

        let config: Object = require('../../config.json');
        
        Configuration.server = config['server']; 

    }

}