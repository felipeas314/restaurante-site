import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ListaEventosComponent } from "./lista-eventos/lista-eventos.component";

@NgModule({
  declarations: [ListaEventosComponent],
  imports: [CommonModule],
  exports: [ListaEventosComponent]
})
export class EventosModule {}
