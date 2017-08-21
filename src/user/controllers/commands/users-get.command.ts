import {SequelizeResponse, SequelizeResponseFactory} from "../../../shared";
import {User, UserDAO, UserFactory} from '../../models';

export class UsersGetCommand {

    public async execute(): Promise<User[]> {

        try {

            let userDAO: UserDAO = new UserDAO();
            let sequelizeResponse: SequelizeResponse[] = await userDAO.getUsers();

            let sequelizeResponseFactory: SequelizeResponseFactory = new SequelizeResponseFactory();
            let data: Object[] = sequelizeResponseFactory.create(sequelizeResponse);

            let userFactory: UserFactory = new UserFactory();
            let users: User[] = userFactory.create(data);

            return users;

        } catch (err) {

            throw err;

        }

    }

}