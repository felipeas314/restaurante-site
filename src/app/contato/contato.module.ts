import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ContatoFormComponent } from "./contato-form/contato-form.component";

@NgModule({
  declarations: [ContatoFormComponent],
  imports: [CommonModule],
  exports: [ContatoFormComponent]
})
export class ContatoModule {}
