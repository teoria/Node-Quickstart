import { Security, SequelizeResponseFactory, ISequelizeResponse } from '../../../shared';
import { UserDAO } from '../../models/dao/user.dao';

export class UsersGetCommand {

    public execute(): Promise<Object[]> {

        return new Promise((resolve, reject) => {

            let userDAO: UserDAO = new UserDAO();
            let promise: Promise<ISequelizeResponse[]> = userDAO.getUsers();
            let factory: SequelizeResponseFactory = new SequelizeResponseFactory();

            promise
                .then(sequelizeResponse => resolve(factory.create(sequelizeResponse)))
                .catch(err => reject(err));

        });

    }

    // public execute(): Promise<Object[]> {

    //     return new Promise(this.getUsers);

    // }

    // private getUsers(resolve, reject): void {

    //     let userDAO: UserDAO = new UserDAO();
    //     let promise: Promise<ISequelizeResponse[]> = userDAO.getUsers();

    //     promise
    //         .then((sequelizeResponse: ISequelizeResponse[]) => this.onSuccessGetUsers(sequelizeResponse, resolve))
    //         .catch(err => reject(err));

    // }

    // private onSuccessGetUsers(sequelizeResponse: ISequelizeResponse[], resolve): void {

    //     let factory: SequelizeResponseFactory = new SequelizeResponseFactory();
    //     let data: Object[] = factory.create(sequelizeResponse);

    //     resolve(data);

    // }

}