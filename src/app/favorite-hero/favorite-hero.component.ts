import { Component, OnInit } from '@angular/core';
import { Hero } from "../hero";

@Component({
  selector: 'app-favorite-hero',
  template: `
    <h1>{{title}}</h1>
    <h2>My favorite hero is: {{myHero}}</h2>
    <p>Heroes:</p>
    <ul>
      <li *ngFor='let hero of heroes'>
        {{hero.name}}
      </li>
    </ul>
    <p *ngIf='heroes.length > 3'>There are many heroes!</p>
  `,
  styleUrls: ['./favorite-hero.component.css']
})
export class FavoriteHeroComponent implements OnInit {

  title = 'Tour of Heroes';
  heroes = [
    new Hero(1, 'Windstorm'),
    new Hero(13, 'Bombasto'),
    new Hero(15, 'Magenta'),
    new Hero(20, 'Tornado')
  ];
  myHero = this.heroes[0];

  constructor() { }

  ngOnInit() {
  }

}
