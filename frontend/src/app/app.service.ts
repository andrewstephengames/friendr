import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  
  private httpOptions: any;
  
  constructor(private http: HttpClient) {
    this.httpOptions = {
      observe: 'body', 
      responseType: 'json',
      headers: {'Access-Control-Allow-Origin':'*'}
    }
  }
  getUserByUsername(username: string): Observable<any> {
    return this.http.get(`http://127.0.0.1:3000/users/${username}`, this.httpOptions);
  }
  getPosts(): Observable<any> {
    return this.http.get(`http://127.0.0.1:3000/posts`, this.httpOptions);
  }
}