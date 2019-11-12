import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RestaurantesComponent } from "./restaurantes/restaurantes/restaurantes.component";

const routes: Routes = [
  {
    path: "",
    component: RestaurantesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
