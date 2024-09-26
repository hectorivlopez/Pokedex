import { Component, inject } from '@angular/core';
import { PokemonRegionComponent } from '../pokemon-region/pokemon-region.component';
import { PokemonService } from '../../services/pokemon.service';
import { CommonModule } from '@angular/common';
import { forkJoin } from 'rxjs';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-pokedex',
  standalone: true,
  imports: [CommonModule, PokemonRegionComponent, SearchComponent],
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.css',
  providers: [PokemonService]
})
export class PokedexComponent {
  private pokemonService = inject(PokemonService);

  regions: any[] = [];
  pokemons: { [key: string]: string[] } = {};
  allPokemons: string[] = []
  selectedPokemons: { [key: string]: string[] } = {};

  pokemonsNumber = 10;

  loaded = false

  constructor() { }

  ngOnInit(): void {
    this.pokemonService.getRegions().subscribe({
      next: (response: any) => {
        this.regions = response.results.map((result: any) => result.name);

        this.regions.forEach((region: string) => this.getPokemonsByRegion(region))

        const regionRequests = this.regions.map(region => this.getPokemonsByRegion(region));

        forkJoin(regionRequests).subscribe({
          next: () => {
            this.selectedPokemons = Object.keys(this.pokemons).reduce((acc, region) => {
              acc[region] = this.pokemons[region].slice(0, this.pokemonsNumber);
              return acc;
            }, {} as { [key: string]: string[] });

            this.allPokemons = Object.values(this.pokemons).flat();
            this.loaded = true
          },
          error: (err) => {
            console.error('Error al obtener todos los pokemones:', err);
          }
        });
      },
      error: (error) => {
        console.error('Error al obtener pokemon:', error);
      },
    });
  }


  getPokemonsByRegion(region: string) {
    return new Promise<void>((resolve, reject) => {

      this.pokemonService.getRegionDetails(region).subscribe({
        next: (response: any) => {
          const pokedexUrl = response.pokedexes[0].url

          this.pokemonService.getPokedex(pokedexUrl).subscribe({
            next: (response: any) => {
              const pokemons = response.pokemon_entries.map((pokemon: { pokemon_species: any; }) => (
                pokemon.pokemon_species
              ))

              const pokemonsNames = pokemons.map((pokemon: { name: string }) => pokemon.name)
              this.pokemons[region] = pokemonsNames;
              resolve()
            },
            error: (error) => {
              console.error('Error al obtener los pokemon de la region:', error);
              reject(error)
            },
          })

        },
        error: (error) => {
          console.error('Error al obtener los detalles de la region:', error);
          reject(error)
        },
      });


    })
  }

  getBackgroundColor(region: string): string {
    const regionColors: { [key: string]: string } = {
      kanto: '#2A333B',
      johto: '#1E2326',
      hoenn: '#354045',
      sinnoh: '#212B30',
      unova: '#2E3B42',
      kalos: '#3A474E',
      alola: '#263032',
      galar: '#1C2224',
      hisui: '#4A575D',
      paldea: '#182024'
    };

    return regionColors[region.toLowerCase()] || '#FFFFFF';
  }
}
