import { ErrorHandler } from '@angular/core';

export class MyErrorHandler extends ErrorHandler{
    handleError(error: any){
        console.log('----MyErrorHandler Start----');
        console.log(error);
        console.log('----MyErrorHandler End------');
    }
}