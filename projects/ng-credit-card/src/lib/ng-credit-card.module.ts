import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NgCreditCardComponent } from "./ng-credit-card.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [NgCreditCardComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [NgCreditCardComponent],
})
export class NgCreditCardModule {}
