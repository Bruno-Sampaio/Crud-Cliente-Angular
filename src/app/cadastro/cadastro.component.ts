import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms'

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})

export class CadastroComponent implements OnInit {

  public formCliente: FormGroup;
  cliente: any = {};

  constructor(private formBuilder: FormBuilder) {
    this.formCliente = this.formBuilder.group({
      nome: [null, [Validators.required]],
      email: [null, [Validators.required]],
      cpf:[null, [Validators.required]],
      rg: [null, [Validators.required]],
      numeroCelular: [null, [Validators.required]]
    })
  }

  onSubmit() {
    console.log(this.formCliente.value);
    this.cliente = Object.assign(this.cliente, this.formCliente.value);
    localStorage.setItem('clientes', JSON.stringify(this.cliente));
  }

  signUp(){}

  ngOnInit(): void {
  }

}