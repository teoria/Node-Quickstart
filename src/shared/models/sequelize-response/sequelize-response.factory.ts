import { SequelizeResponse } from './sequelize-response.model';

export class SequelizeResponseFactory {

    public create(sequelizeResponse: SequelizeResponse[]): Object[] {

        let data: Object[] = [];

        for(let i: number = 0 ; i < sequelizeResponse.length ; i++) {
            data.push(sequelizeResponse[i].dataValues);
        }

        return data;

    }

}