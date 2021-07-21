import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AttestationComponent} from './attestation.component';
import {ActivatedRoute} from "@angular/router";
import {provideMockStore} from "@ngrx/store/testing";
import {initialAttestationState} from "../reducers/attestation.reducer";
import {of} from 'rxjs';


describe('AttestationComponent', () => {
  let component: AttestationComponent;
  let fixture: ComponentFixture<AttestationComponent>;
  const activatedRouteMock = {
    queryParams: of({
      "token": "token"
    })
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AttestationComponent],
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
    fixture = TestBed.createComponent(AttestationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
