import { Injectable, Input, Output } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';

@Injectable()
export class jwtinterceptor implements HttpInterceptor{

    jwtToken: string;
    
    constructor(){}

    intercept(req: HttpRequest<any>, next: HttpHandler){
        req = req.clone({
            url: req.url,
            setHeaders: {
                Autherization: `Bearer {jwtToken}`
            }
        })
        return next.handle(req);
    }
}

