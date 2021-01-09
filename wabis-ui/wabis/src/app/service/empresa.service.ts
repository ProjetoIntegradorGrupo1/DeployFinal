import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empresa } from '../model/Empresa';
import { environment } from './../../environments/environment.prod'


@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  constructor(private http:HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllEmpresa(): Observable<Empresa[]>{
    return this.http.get<Empresa[]>('https://wabis.herokuapp.com/empresa', this.token)
  }
  
  getByIdEmpresa(id: number): Observable<Empresa>{
    return this.http.get<Empresa>(`https://wabis.herokuapp.com/empresa/${id}`, this.token)
  }

  postEmpresa(empresa: Empresa): Observable<Empresa>{
    return this.http.post<Empresa>('https://wabis.herokuapp.com/empresa', empresa, this.token)
  }

  putEmpresa(empresa: Empresa): Observable<Empresa> {
    return this.http.put<Empresa>('https://wabis.herokuapp.com/empresa', empresa, this.token)
  }

  deleteEmpresa(id: number){
    return this.http.delete(`https://wabis.herokuapp.com/empresa/${id}`, this.token)
  }

  getByNomeEmpresa(nome: string): Observable<Empresa[]> {
    return this.http.get<Empresa[]>(`https://wabis.herokuapp.com/empresa/nome/${nome}`, this.token)
  }

}