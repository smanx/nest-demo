import {
    Injectable,
    NestInterceptor,
    ExecutionContext,
    BadGatewayException,
    CallHandler,
} from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators'
import { ModelLogAdd } from 'src/model/model.log';


export interface Response<T> {
    data: T;
}

@Injectable()
export class TransformInterceptor<T> implements NestInterceptor<T, Response<T>> {
    intercept(context: ExecutionContext, next: CallHandler): Observable<Response<T>> {
        return next.handle().pipe(
            catchError(err => throwError(new BadGatewayException())),
        ).pipe(map(data => {
            let [req, res, next] = context['args']
            ModelLogAdd(data, req, res)
            return data
        }));
    }
}
