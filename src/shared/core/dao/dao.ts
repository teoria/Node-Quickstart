import * as db from '../../../../sequelize/models/index.js';

export class DAO {
    
    protected db: any;

    constructor() {
        this.db = db;
    }

}