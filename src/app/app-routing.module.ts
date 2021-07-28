import { NgModule } from '@angular/core';
import {AttestationComponent} from "./attestation/attestation.component";
import {RouterModule, Routes} from "@angular/router";
import {TokenUriAccessComponent} from "./token-uri-access/token-uri-access.component";

const routes: Routes = [
  {path: 'attestation', component: AttestationComponent},
  {path: 'attestation/:attestationId', component: TokenUriAccessComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
