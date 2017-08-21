import * as JsonWebToken from 'jsonwebtoken';

export class Security {

    private secretKey: string;

    constructor() {

        this.secretKey = "YOUR_SECRET_KEY";

    }

    public getToken(value: any): string {

        return JsonWebToken.sign(value, this.secretKey, { expiresIn: "2 days" });

    }

    public verifyToken(token: string): Object {

        let data: Object;

        try {

            data = JsonWebToken.verify(token, this.secretKey);

        } catch (error) {

            console.log(error);

            return null;

        }

        return data;

    }

}