import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonRegionComponent } from './pokemon-region.component';

describe('PokemonRegionComponent', () => {
  let component: PokemonRegionComponent;
  let fixture: ComponentFixture<PokemonRegionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonRegionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
