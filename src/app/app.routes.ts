import { Routes } from '@angular/router';
import { PokedexComponent } from './components/pokedex/pokedex.component';
import { PokemonDetailsComponent } from './components/pokemon-details/pokemon-details.component';

export const routes: Routes = [
  {
    path: '',
    component: PokedexComponent
  },
  {
    path: 'pokemon/:name',
    component: PokemonDetailsComponent
  }
];
