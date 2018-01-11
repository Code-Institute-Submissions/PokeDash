import { PokemonDataService } from './../../services/pokemon-data.service';
import { Component, OnInit } from '@angular/core';
import { Pokemons } from '../../components/shared/pokemons'
import * as _ from "lodash";

@Component({
  selector: "app-pokemon-list",
  templateUrl: "./pokemon-list.component.html",
  styleUrls: ["./pokemon-list.component.css"]
})
export class PokemonListComponent implements OnInit {
  constructor(private pokemonService: PokemonDataService) {}

  pokemons: Pokemons[];
  total: 0;
  page = 1;
  limit = 200;
  loading = false;

  ngOnInit() {
    this.populateTable();
  }

  populateTable(): void {
    this.pokemonService.getPokemons().subscribe(res => {
      console.log(res);
      this.pokemons = _.sortBy(res.data, [function(o) { return o.id}])
      this.loading = false;
      console.log(this.pokemons);
    });
  }
}