import { SequelizeResponse, DAO } from "../../shared";

export class UserDAO extends DAO {
    
    constructor() {
        super();
    }

    public getUsers(): Promise<SequelizeResponse[]> {

        return this.db.user.findAll({
            attributes: ['id', 'name', 'profile']
        });

    }

}