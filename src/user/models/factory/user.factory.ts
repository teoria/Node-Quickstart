import { User } from '../vo/user.vo';

export class UserFactory {

    public create(data: any): any {

        switch (data.constructor) {
            case Array: {
                return this.createUsers(data);
            }

            case Object: {
                return this.createUser(data);
            }
        }

    }

    private createUsers(data: Object[]): User[] {

        let users: User[] = [];

        for(let i: number = 0 ; i < data.length ; i++) {
            let user: User = this.createUser(data[i]);
            users.push(user);
        }

        return users;

    }

    private createUser(data: Object): User {

        let user: User = new User(data);
        
        return user;

    }

}