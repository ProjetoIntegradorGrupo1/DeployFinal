import { UserLogin } from './../model/UserLogin';
import { Router } from '@angular/router';
import { AuthService } from './../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { environment } from './../../environments/environment.prod'
import { AlertasService } from '../service/alertas.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLogin: UserLogin = new UserLogin()

  constructor(
    private authService: AuthService,
    private router: Router,
    private alerta: AlertasService

  ) { }

  ngOnInit() {
  }

  entrar() {
    this.authService.logar(this.userLogin).subscribe((resp: UserLogin) => {
      this.userLogin = resp
      
      environment.token = this.userLogin.token
      this.router.navigate(['/feed'])
    }, err =>{
      if (err.status = '500'){
        this.alerta.showAlertDanger('E-mail ou senha inválidos, tente novamente!')
      }
    })
  }

}
