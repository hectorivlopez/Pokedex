import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokedexComponent } from './components/pokedex/pokedex.component';
import { PokemonRegionComponent } from './components/pokemon-region/pokemon-region.component';
import { SearchComponent } from './components/search/search.component';
import { PokemonService } from './services/pokemon.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PokedexComponent, PokemonRegionComponent, SearchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [PokemonService]
})
export class AppComponent {
  title = 'pokedex';

}

