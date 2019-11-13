import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RestaurantesComponent } from "./restaurantes/restaurantes/restaurantes.component";
import { RestauranteDetalheComponent } from "./restaurante-detalhe/restaurante-detalhe/restaurante-detalhe.component";
import { SobreComponent } from "./sobre/sobre/sobre.component";
import { ListaEventosComponent } from "./eventos/lista-eventos/lista-eventos.component";
import { ContatoFormComponent } from "./contato/contato-form/contato-form.component";

const routes: Routes = [
  {
    path: "",
    component: RestaurantesComponent
  },
  {
    path: "restaurante/:id",
    component: RestauranteDetalheComponent
  },
  {
    path: "sobre",
    component: SobreComponent
  },
  {
    path: "eventos",
    component: ListaEventosComponent
  },
  {
    path: "contato",
    component: ContatoFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
