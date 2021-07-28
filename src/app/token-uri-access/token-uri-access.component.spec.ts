import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenUriAccessComponent } from './token-uri-access.component';

describe('TokenUriAccessComponent', () => {
  let component: TokenUriAccessComponent;
  let fixture: ComponentFixture<TokenUriAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TokenUriAccessComponent ]
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
