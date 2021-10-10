import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeCatalogueComponent } from './poke-catalogue.component';

describe('PokeCatalogueComponent', () => {
  let component: PokeCatalogueComponent;
  let fixture: ComponentFixture<PokeCatalogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeCatalogueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeCatalogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
