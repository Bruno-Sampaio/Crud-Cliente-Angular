import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms'

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})

export class CadastroComponent implements OnInit {

  public formClient: FormGroup;
  
  constructor(private formBuilder: FormBuilder) {
    this.formClient = this.formBuilder.group({
      nome: [null, [Validators.required]],
      email: [null, [Validators.required]],
      cpf:[null, [Validators.required]],
      rg: [null, [Validators.required]],
      numeroCelular: [null, [Validators.required]]
    })
  }

  signUp(){
    console.log(this.formClient.value)
  }

  ngOnInit(): void {
  }

}