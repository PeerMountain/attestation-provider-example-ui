import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AttestationComponent} from './attestation/attestation.component';
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {MatIconModule} from "@angular/material/icon";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {StoreModule} from '@ngrx/store';
import {MatCardModule} from "@angular/material/card";
import {attestationReducer} from "./reducers/attestation.reducer";
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {EffectsModule} from "@ngrx/effects";
import {AttestationEffects} from "./effects/attestation.effects";

@NgModule({
  declarations: [
    AppComponent,
    AttestationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    HttpClientModule,
    MatIconModule,
    BrowserAnimationsModule,
    StoreDevtoolsModule,
    StoreModule.forRoot({attestation: attestationReducer}, {}),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
    }),
    EffectsModule.forRoot([AttestationEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
