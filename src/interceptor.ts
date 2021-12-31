import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Injectable()
export class AppInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('Before2...');
    const now = Date.now();
    return next
      .handle()
      .pipe(
        tap(() => console.log(`After2... ${Date.now() - now}ms`)),
      );
  }
}

@Injectable()
export class Interceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('Before...');
    const now = Date.now();
    return next
      .handle()
      .pipe(
        tap(() => console.log(`After... ${Date.now() - now}ms`)),
        map(data => {
          return {
            data,
            code: 1,
            message: '请求成功',
          };
        })
      );
  }
}


