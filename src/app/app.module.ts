import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListaComponent } from './lista/lista.component';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms'

var rotas: Routes = [
  {path: "",redirectTo: "cadastro",pathMatch: "full"},
  {path: "cadastro", component: CadastroComponent},
  {path: "lista", component: ListaComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    ListaComponent
  ],
  exports:[
    RouterModule
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rotas),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
