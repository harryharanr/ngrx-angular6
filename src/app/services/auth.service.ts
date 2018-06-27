import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  domain = "http://localhost:3000/";
  constructor(private http: Http) { }

  login(email,password) {
    return this.http.post(this.domain + 'api/auth',{email:email,password:password}).map(res => 
      res.json()
    );
  }
}
