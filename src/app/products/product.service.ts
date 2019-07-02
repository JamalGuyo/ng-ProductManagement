import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

import { IProduct } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productUrl = 'api/products/products.json';
  constructor(private http: HttpClient) {}
  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productUrl).pipe(
      tap(data => console.log('All : ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    let errMessage = '';
    if (err.error instanceof ErrorEvent) {
      //   error on the client-side e.g network issue
      errMessage = `An Error Occurred: ${err.error.message}`;
    } else {
      // Error on the server side
      errMessage = `Server Returned Code: ${err.status}, Error Message is: ${
        err.message
      }`;
    }
    console.log(errMessage);
    return throwError(errMessage);
  }
}
