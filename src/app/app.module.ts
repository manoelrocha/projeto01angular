import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CadastroClientesComponent } from './cadastro-clientes/cadastro-clientes.component';
import { ConsultaClientesComponent } from './consulta-clientes/consulta-clientes.component';
import { RelatorioClientesComponent } from './relatorio-clientes/relatorio-clientes.component';

//importando as classes da biblioteca de mapeamento de rotas (URLs)
import{ Routes, RouterModule  } from '@angular/router';

//configurando uma rota (endereco) para acessar cada componente
const routes: Routes = [
  {path : 'cadastro-clientes', component : CadastroClientesComponent},
  {path : 'consulta-clientes', component : ConsultaClientesComponent},
  {path : 'relatorio-clientes', component : RelatorioClientesComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    CadastroClientesComponent,
    ConsultaClientesComponent,
    RelatorioClientesComponent
  ],
  imports: [
    BrowserModule,
    //registrar os mapeamentos realizados
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
