import { DAO } from '../../../shared';

export class UserDAO extends DAO {
    
    constructor() {
        super();
    }

    public getUsers(): Promise<Object[]> {

        return this.db.users.findAll({
            attributes: ['id', 'name', 'email', 'profile']
        });

    }

}