import { Model } from "../../shared";

export class User extends Model {

    id: string;
    name: string;
    email: string;
    password: string;
    profile: string;
    created_at: string;
    updated_at: string;

    constructor(data: Object = {}) {
        super();
        this.set(data);
    }

}