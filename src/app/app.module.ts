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
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import { TokenUriAccessComponent } from './token-uri-access/token-uri-access.component';

@NgModule({
  declarations: [
    AppComponent,
    AttestationComponent,
    TokenUriAccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    HttpClientModule,
    MatIconModule,
    BrowserAnimationsModule,
    StoreDevtoolsModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
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
