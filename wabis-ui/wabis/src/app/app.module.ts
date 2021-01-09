import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { OrderModule } from 'ngx-order-pipe';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './home/home.component';
import { SobrenosComponent } from './sobrenos/sobrenos.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { FeedComponent } from './feed/feed.component';
import { PostEmpresaComponent } from './post-empresa/post-empresa.component';
import { DeleteEmpresaComponent } from './delete-empresa/delete-empresa.component';
import { DeletePostagemComponent } from './delete-postagem/delete-postagem.component';
import { PutEmpresaComponent } from './put-empresa/put-empresa.component';
import { PutPostagemComponent } from './put-postagem/put-postagem.component';
import { AlertasComponent } from './alertas/alertas.component';

import {HashLocationStrategy, LocationStrategy} from '@angular/common'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SobrenosComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    CadastroComponent,
    FeedComponent,
    PostEmpresaComponent,
    DeleteEmpresaComponent,
    DeletePostagemComponent,
    PutEmpresaComponent,
    PutPostagemComponent,
    AlertasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    OrderModule,
    ModalModule.forRoot()
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
