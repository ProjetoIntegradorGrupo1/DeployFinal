import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Postagem } from '../model/Postagem';
import { environment } from './../../environments/environment.prod'

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllPostagens(): Observable<Postagem[]> {
    return this.http.get<Postagem[]>('https://wabis.herokuapp.com/postagem', this.token)
  }

  getByIdPostagem(id: number): Observable<Postagem> {
    return this.http.get<Postagem>(`https://wabis.herokuapp.com/postagem/${id}`, this.token)
  }

  postPostagem(postagem: Postagem): Observable<Postagem> {
    return this.http.post<Postagem>('https://wabis.herokuapp.com/postagem', postagem, this.token)
  }

  putPostagem(postagem: Postagem): Observable<Postagem> {
    return this.http.put<Postagem>('https://wabis.herokuapp.com/postagem', postagem, this.token)
  }

  deletePostagem(id: number): Observable<Postagem> {
    return this.http.delete<Postagem>(`https://wabis.herokuapp.com/postagem/${id}`, this.token)
  }

  getByTituloPostagem(titulo: string): Observable<Postagem[]> {
    return this.http.get<Postagem[]>(`https://wabis.herokuapp.com/postagem/titulo/${titulo}`, this.token)
  }

}
