import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url: string = 'http://localhost:3000';

  constructor(
    private http: HttpClient
  ) { }
  
  public sign(payLoad: {email: string, password: string}): Observable<any>{
    return this.http.post(`${this.url}/sign`, payLoad).pipe(
      map((res)=> {
        return console.log(res);
      }),
      catchError((err) => {
        console.error(err);
        if(err.error.message) return throwError(() => err.error.message);

        return throwError(()=> "No momento nao estamos conseguindo validar os dados.")
      })
    )
  }

}
