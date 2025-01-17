import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  getUsers():Observable<any>{
    const url = 'https://jsonplaceholder.typicode.com/users';
    return this.http.get<any>(url);
  }
}
