import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  http = inject(HttpClient);
  apiUrl = environment.API_URL;

  getRegions(): Observable<any> {
    return this.http.get(`${this.apiUrl}/region/`);
  }

  getRegionDetails(region: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/region/${region}`);
  }

  getPokedex(url: string): Observable<any> {
    return this.http.get(url);
  }

  getPokemonDetails(pokemon: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/pokemon/${pokemon}`);
  }

}