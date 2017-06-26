import { SequelizeResponse, SequelizeResponseFactory } from "../../../shared";
import { User, UserDAO, UserFactory } from '../../models';

export class UsersGetCommand {

    public execute(): Promise<User[]> {

        let promise: Promise<User[]> = new Promise((resolve, reject) => this.getUsers(resolve, reject));
        return promise;

    }

    private getUsers(resolve, reject): void {

        let userDAO: UserDAO = new UserDAO();
        let promise: Promise<SequelizeResponse[]> = userDAO.getUsers();
        
        promise
            .then((sequelizeResponse: SequelizeResponse[]) => this.onSuccessGetUsers(sequelizeResponse, resolve))
            .catch(err => reject(err));

    }

    private onSuccessGetUsers(sequelizeResponse: SequelizeResponse[], resolve): void {

        let sequelizeResponseFactory: SequelizeResponseFactory = new SequelizeResponseFactory();
        let data: Object[] = sequelizeResponseFactory.create(sequelizeResponse);
        let userFactory: UserFactory = new UserFactory();
        let users: User[] = userFactory.create(data);
        
        resolve(users);

    }

    //or 

    // public execute(): Promise<Object[]> {

    //     return new Promise((resolve, reject) => {

    //         let userDAO: UserDAO = new UserDAO();
    //         let promise: Promise<ISequelizeResponse[]> = userDAO.getUsers();
    //         let sequelizeResponseFactory: SequelizeResponseFactory = new SequelizeResponseFactory();
    //         let userFactory: UserFactory = new UserFactory();
            
    //         promise
    //             .then(sequelizeResponse => resolve(userFactory.create(sequelizeResponseFactory.create(sequelizeResponse))))
    //             .catch(err => reject(err));

    //     });

    // }

}