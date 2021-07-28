import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TokenUriAccessComponent} from './token-uri-access.component';
import {ActivatedRoute} from "@angular/router";
import {provideMockStore} from "@ngrx/store/testing";
import {initialAttestationState} from "../reducers/attestation.reducer";

describe('TokenUriAccessComponent', () => {
  let component: TokenUriAccessComponent;
  let fixture: ComponentFixture<TokenUriAccessComponent>;
  const activatedRouteMock = {
    snapshot: {
      paramMap: new Map([
        ["token", "token"]
      ])
    }
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TokenUriAccessComponent],
      providers: [
        {provide: ActivatedRoute, useValue: activatedRouteMock},
        provideMockStore({
            initialState: {
              attestation: initialAttestationState
            }
          }
        )
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TokenUriAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
