import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  user: User = new User()
  senha: string

  constructor(
    private authService: AuthService,
    private router: Router,
    private alerta: AlertasService
  ) { }

  ngOnInit(): void {
  }

  conferirSenha(event: any) {
    this.senha = event.target.value
  }

  cadastrar() {
    if (this.senha === this.user.senha) {
      this.authService.cadastrar(this.user).subscribe((resp: User)=> {
        this.user = resp
        this.router.navigate(['/login'])
        this.alerta.showAlertSuccess('Usuário cadastrado com sucesso!')
      })
    } else {
      this.alerta.showAlertDanger('Suas senhas não conferem')
    }

//     err => {
//         console.log(`Erro cod: ${err.status}`)
//         if (err.status==400) {
//           alert("usuario ja cadastrado")
//         }
//       })
//     } else {
//       alert('Suas senhas não conferem')
//     }
//   }
// }
    
  }

}
