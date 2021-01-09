import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empresa } from '../model/Empresa';
import { EmpresaService } from '../service/empresa.service';
import { AlertasService } from '../service/alertas.service';

@Component({
  selector: 'app-put-empresa',
  templateUrl: './put-empresa.component.html',
  styleUrls: ['./put-empresa.component.css']
})
export class PutEmpresaComponent implements OnInit {
  empresa: Empresa = new Empresa()
  constructor(
    private empresaService: EmpresaService,
    private router: Router,
    private route: ActivatedRoute,
    private alert: AlertasService
  ) { }

  ngOnInit() {
    window.scroll(0,0)
    let id: number = this.route.snapshot.params["id"];
    this.findByIdEmpresa(id);
  }

  findByIdEmpresa(id: number) {
    this.empresaService.getByIdEmpresa(id).subscribe((resp: Empresa) => {
      this.empresa = resp;
    })
  }

  salvar() {
    this.empresaService.putEmpresa(this.empresa).subscribe((resp: Empresa) => {
      this.empresa = resp
      this.router.navigate(['/cadastro-empresa'])
      this.alert.showAlertSuccess('Empresa atualizado com sucesso!')
    })
  }

}

