import { Component, OnInit, Input, inject } from '@angular/core';
import { PokemonComponent } from '../pokemon/pokemon.component';
import { PokemonService } from '../../services/pokemon.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokemon-region',
  standalone: true,
  imports: [CommonModule, PokemonComponent],
  templateUrl: './pokemon-region.component.html',
  styleUrl: './pokemon-region.component.css',
  providers: [PokemonService]
})
export class PokemonRegionComponent {
  @Input() pokemons!: string[];
  @Input() regionName!: string;

  constructor() { }
}
