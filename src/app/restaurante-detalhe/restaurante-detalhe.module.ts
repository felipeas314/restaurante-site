import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RestauranteDetalheComponent } from "./restaurante-detalhe/restaurante-detalhe.component";

@NgModule({
  declarations: [RestauranteDetalheComponent],
  imports: [CommonModule],
  exports: [RestauranteDetalheComponent]
})
export class RestauranteDetalheModule {}
