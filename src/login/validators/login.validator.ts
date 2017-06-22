import * as Joi from 'joi';

export class LoginValidator {

    get LOGIN(): Object {
        return {
            username: Joi.string(),
            password: Joi.string()
        }
    }

}