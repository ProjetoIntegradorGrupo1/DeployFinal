import { Component, OnInit } from '@angular/core';
import { Empresa } from './../model/Empresa';

import { EmpresaService } from './../service/empresa.service';
import { PostagemService } from './../service/postagem.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertasService } from './../service/alertas.service';
import { Postagem } from './../model/Postagem';

@Component({
  selector: 'app-put-postagem',
  templateUrl: './put-postagem.component.html',
  styleUrls: ['./put-postagem.component.css']
})
export class PutPostagemComponent implements OnInit {

  postagem: Postagem= new Postagem()
  idPost: number

  empresa: Empresa = new Empresa()
  listaEmpresas: Empresa[]
  idEmpresa: number

  constructor(
    private empresaService: EmpresaService,
    private postagemService: PostagemService,
    private router: Router,
    private route: ActivatedRoute,
    private alert: AlertasService
  ) { }

  ngOnInit() {
    this.idPost = this.route.snapshot.params["id"]
    this.findByIdPostagem(this.idPost)
    this.findAllEmpresas()
  }

  findByIdPostagem(id: number){
    this.postagemService.getByIdPostagem(id).subscribe((resp: Postagem) =>{
      this.postagem = resp 
    })
  }

  salvar(){
    this.empresa.id = this.idEmpresa
    this.postagem.empresa = this.empresa

    this.postagemService.putPostagem(this.postagem).subscribe((resp: Postagem) =>{
      this.postagem = resp
      this.router.navigate(['/feed'])
      this.alert.showAlertSuccess('Postagem alterada com sucesso')
    }, err =>{
      if (err.status = '500'){
        this.alert.showAlertDanger('Preencha todos os campos corretamente antes de enviar!')
      }
    })
  }

  findAllEmpresas(){
    this.empresaService.getAllEmpresa().subscribe((resp: Empresa[]) =>{
      this.listaEmpresas = resp
    })
  }

  findByIdEmpresa(){
    this.empresaService.getByIdEmpresa(this.idEmpresa).subscribe((resp: Empresa) =>{
      this.empresa = resp
    })
  }

}

