import { ISequelizeResponse, Security, SequelizeResponseFactory } from '../../../shared';
import { UserDAO } from '../../models/dao/user.dao';
import { UserFactory } from '../../models/factory/user.factory';
import { User } from '../../models/vo/user.vo';

export class UsersGetCommand {

    public execute(): Promise<Object[]> {

        let promise: Promise<Object[]> = new Promise((resolve, reject) => this.getUsers(resolve, reject));
        return promise;

    }

    private getUsers(resolve, reject): void {

        let userDAO: UserDAO = new UserDAO();
        let promise: Promise<ISequelizeResponse[]> = userDAO.getUsers();
        
        promise
            .then((sequelizeResponse: ISequelizeResponse[]) => this.onSuccessGetUsers(sequelizeResponse, resolve))
            .catch(err => reject(err));

    }

    private onSuccessGetUsers(sequelizeResponse: ISequelizeResponse[], resolve): void {

        let sequelizeResponseFactory: SequelizeResponseFactory = new SequelizeResponseFactory();
        let data: Object[] = sequelizeResponseFactory.create(sequelizeResponse);
        
        resolve(data);

    }

    //or 

    // public execute(): Promise<Object[]> {

    //     return new Promise((resolve, reject) => {

    //         let userDAO: UserDAO = new UserDAO();
    //         let promise: Promise<ISequelizeResponse[]> = userDAO.getUsers();
    //         let factory: SequelizeResponseFactory = new SequelizeResponseFactory();
            
    //         promise
    //             .then(sequelizeResponse => resolve(factory.create(sequelizeResponse)))
    //             .catch(err => reject(err));

    //     });

    // }

}