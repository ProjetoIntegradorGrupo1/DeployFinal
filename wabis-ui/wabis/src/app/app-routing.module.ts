import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {SobrenosComponent} from './sobrenos/sobrenos.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { FeedComponent } from './feed/feed.component';
import { PostEmpresaComponent } from './post-empresa/post-empresa.component';
import { PutEmpresaComponent } from './put-empresa/put-empresa.component';
import { PutPostagemComponent } from './put-postagem/put-postagem.component';
import { DeleteEmpresaComponent } from './delete-empresa/delete-empresa.component';
import { DeletePostagemComponent } from './delete-postagem/delete-postagem.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'feed', component: FeedComponent},
  {path: 'sobrenos', component: SobrenosComponent},
  {path: 'login', component: LoginComponent },
  {path: 'cadastro', component: CadastroComponent},
  {path: 'cadastro-empresa', component: PostEmpresaComponent},
  {path: 'edita-post/:id', component: PutPostagemComponent},
  {path: 'delete-post/:id', component: DeletePostagemComponent},
  {path: 'delete-empresa/:id', component: DeleteEmpresaComponent},
  {path: 'edita-empresa/:id', component: PutEmpresaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
