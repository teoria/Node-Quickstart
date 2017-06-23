import { ISequelizeResponse } from "./sequelize-response.interface";

export class SequelizeResponseFactory {

    public create(sequelizeResponse: ISequelizeResponse[]): Object[] {

        let data: Object[] = [];

        for(let i: number = 0 ; i < sequelizeResponse.length ; i++) {
            data.push(sequelizeResponse[i].dataValues);
        }

        return data;

    }

}