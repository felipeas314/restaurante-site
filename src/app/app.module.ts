import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { RestaurantesModule } from "./restaurantes/restaurantes.module";
import { HeaderModule } from "./header/header.module";
import { RestauranteDetalheModule } from "./restaurante-detalhe/restaurante-detalhe.module";
import { FooterModule } from "./footer/footer.module";
import { SobreModule } from "./sobre/sobre.module";
import { EventosModule } from "./eventos/eventos.module";
import { ContatoModule } from "./contato/contato.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HeaderModule,
    FooterModule,
    RestaurantesModule,
    RestauranteDetalheModule,
    SobreModule,
    EventosModule,
    ContatoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
