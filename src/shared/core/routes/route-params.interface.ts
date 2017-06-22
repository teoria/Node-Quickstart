import { IReply, Request } from "hapi";

export interface IRouteParams {

    request: Request;
    reply: IReply;
    params: any;

}