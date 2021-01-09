import { UserLogin } from './../model/UserLogin';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/User';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment.prod'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  logar(userLogin: UserLogin): Observable<UserLogin> {
    return this.http.post<UserLogin>('https://wabis.herokuapp.com/usuario/logar', userLogin)
  }

  cadastrar(user: User): Observable<User> {
    return this.http.post<User>('https://wabis.herokuapp.com/usuario/cadastrar', user)
  }

  btnSair(){
    let ok = false
    let token = environment.token

    if (token != '') {
      ok = true
    }

    return ok
  }

  btnLogin() {
    let ok = false
    let token = environment.token

    if (token == '') {
      ok = true
    }

    return ok
  }

}
