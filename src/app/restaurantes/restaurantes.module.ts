import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RestaurantesComponent } from "./restaurantes/restaurantes.component";
import { HttpClient } from "selenium-webdriver/http";
import { RestaurantesService } from "./restaurantes.service";

@NgModule({
  declarations: [RestaurantesComponent],
  imports: [CommonModule],
  exports: [RestaurantesComponent],
  providers: [RestaurantesService]
})
export class RestaurantesModule {}
