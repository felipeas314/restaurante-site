import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Restaurante } from "./restaurante";

@Injectable({
  providedIn: "root"
})
export class RestaurantesService {
  constructor(private http: HttpClient) {}

  listaRestaurantes() {
    return this.http.get<Restaurante[]>(
      "http://localhost:3000/api/v1/restaurants"
    );
  }
}
