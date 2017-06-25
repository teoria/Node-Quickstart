import { VO } from '../../../shared';

export class User extends VO {

    private _id: string;
    private _name: string;
    private _email: string;
    private _password: string;
    private _profile: string;
    private _created_at: string;
    private _updated_at: string;

    constructor(data: Object = {}) {
        super();
        this.set(data);
    }

    public get id(): string {
        return this._id;
    }

    public set id(value: string) {
        this._id = value;
    }

    public get name(): string {
        return this._name;
    }

    public set name(value: string) {
        this._name = value;
    }

    public get email(): string {
        return this._email;
    }

    public set email(value: string) {
        this._email = value;
    }

    public get password(): string {
        return this._password;
    }

    public set password(value: string) {
        this._password = value;
    }

    public get profile(): string {
        return this._profile;
    }

    public set profile(value: string) {
        this._profile = value;
    }

    public get created_at(): string {
        return this._created_at;
    }

    public set created_at(value: string) {
        this._created_at = value;
    }

    public get updated_at(): string {
        return this._updated_at;
    }

    public set updated_at(value: string) {
        this._updated_at = value;
    }

}