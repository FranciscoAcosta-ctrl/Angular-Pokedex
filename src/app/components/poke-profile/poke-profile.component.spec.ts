import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeProfileComponent } from './poke-profile.component';

describe('PokeProfileComponent', () => {
  let component: PokeProfileComponent;
  let fixture: ComponentFixture<PokeProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
