import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../../services/pokemon.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokemon-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-details.component.html',
  styleUrl: './pokemon-details.component.css',
})
export class PokemonDetailsComponent implements OnInit {
  pokemonDetails: any = null;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    const pokemon = this.route.snapshot.paramMap.get('name');
    if (pokemon) {
      this.pokemonService.getPokemonDetails(pokemon).subscribe({
        next: (details) => {
          this.pokemonDetails = details;
          console.log(details)
        },
        error: (error) => {
          console.error('Error al obtener los detalles del pokemon:', error);
        },
      });
    }
  }
}
