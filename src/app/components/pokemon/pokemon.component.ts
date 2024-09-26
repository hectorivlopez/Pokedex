import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css',
  providers: [PokemonService]
})
export class PokemonComponent implements OnInit {
  @Input() pokemon: any;
  details: any = null;

  private pokemonService = inject(PokemonService);
  private router = inject(Router);

  constructor() { }

  ngOnInit(): void {
    if (!this.details) {
      this.pokemonService.getPokemonDetails(this.pokemon).subscribe({
        next: (response) => {
          this.details = response;
        },
        error: (error) => {
          console.error('Error al obtener los detalles del pokemon:', error);
        },
      });
    }
  }

  goToDetails(): void {
    this.router.navigate(['/pokemon', this.pokemon]);
  }
}