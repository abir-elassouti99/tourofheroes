import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './heroes/hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Dragon Ball', image:'dg.jpg'},
      { id: 2, name: 'Naroto',image:'naroto.jpg' },
      { id:3, name: 'Bombasto',image:'naroto2.png' },
      { id: 4, name: 'Saitama',image:'saitama.png' },
      { id:3, name: 'Bombasto',image:'naroto2.png' },
      { id: 4, name: 'Saitama',image:'saitama.png' },
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}