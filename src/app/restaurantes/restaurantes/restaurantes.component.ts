import { Component, OnInit } from "@angular/core";
import { RestaurantesService } from "../restaurantes.service";
import { Restaurante } from "../restaurante";

@Component({
  selector: "app-restaurantes",
  templateUrl: "./restaurantes.component.html",
  styleUrls: ["./restaurantes.component.css"]
})
export class RestaurantesComponent implements OnInit {
  restaurantes: Restaurante[] = [];

  constructor(private restauranteService: RestaurantesService) {}

  ngOnInit() {
    this.getRestaurantes();
  }

  getRestaurantes() {
    this.restauranteService.listaRestaurantes().subscribe((response: any) => {
      this.restaurantes = response.data;
      console.log(this.restaurantes);
    });
  }
}
