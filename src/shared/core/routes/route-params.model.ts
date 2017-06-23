import { IReply, Request } from 'hapi';
import { Model } from 'sinkmvc';

import { IRouteParams } from "./route-params.interface";

export class RouteParams extends Model implements IRouteParams {

    private _request: Request;
    private _reply: IReply;
    private _params: any;

    constructor(data: Object = {}) {
        super();
        this.set(data);
    }

    get request(): Request {
        return this._request;
    }

    set request(value: Request) {
        this._request = value;
    }

    get reply(): IReply {
        return this._reply;
    }

    set reply(value: IReply) {
        this._reply = value;
    }

    get params(): any {
        return this._params;
    }

    set params(value: any) {
        this._params = value;
    }
}