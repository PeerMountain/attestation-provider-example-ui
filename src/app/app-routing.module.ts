import { NgModule } from '@angular/core';
import {AttestationComponent} from "./attestation/attestation.component";
import {RouterModule, Routes} from "@angular/router";


const routes: Routes = [
  {path: 'attestation', component: AttestationComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
