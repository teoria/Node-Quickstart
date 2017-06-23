import { DAO, ISequelizeResponse } from '../../../shared';

export class UserDAO extends DAO {
    
    constructor() {
        super();
    }

    public getUsers(): Promise<ISequelizeResponse[]> {

        return this.db.user.findAll({
            attributes: ['id', 'name', 'profile']
        });

    }

}