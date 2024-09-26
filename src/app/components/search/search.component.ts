import { Component, Input } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  @Input() allPokemons!: string[];

  pokemonDetails: any = null;

  constructor(private router: Router) { }

  onSearch(target: string): void {
    const lowerCaseTarget = target.toLowerCase();

    const index = this.allPokemons.indexOf(lowerCaseTarget)
    if (index !== -1) {
      this.router.navigate(['/pokemon', lowerCaseTarget]);
    }
    else console.log("No encontrado")
  }



}
