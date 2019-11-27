import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Employee } from 'src/models/employee';

const endpoint = 'http://localhost:10000/all';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class EmployeeManagementService {

  constructor(private http : HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getEmployees() : Observable<any> {
    return this.http.get(endpoint, httpOptions).pipe(
      map(this.extractData)
    );
  }

  getEmployee(emp_id : string) : Observable<any> {
    return this.http.get(endpoint + emp_id, httpOptions).pipe(
      map(this.extractData)
    );
  }

  addEmployee (employee : Employee): Observable<any> {
    return this.http.post<any>(endpoint, JSON.stringify(employee), httpOptions).pipe(
      tap((u) => console.log(`added employee w/ id=${u.id}`)),
      catchError(this.handleError<any>('addEmployee'))
    );
  }

  updateEmployee (id : string, employee): Observable<any> {
    return this.http.put(endpoint + id, JSON.stringify(employee), httpOptions).pipe(
      tap(_ => console.log(`updated employee w/ id=${id}`)),
      catchError(this.handleError<any>('updateEmployee'))
    );
  }

  deleteEmployee (id : string): Observable<any> {
    return this.http.delete<any>(endpoint + id, httpOptions).pipe(
      tap(_ => console.log(`deleted employee w/ id=${id}`)),
      catchError(this.handleError<any>('deleteEmployee'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      console.error(error); // log to console 
  
      // better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
