import { Component, OnInit } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { PokemonService } from '../../services/pokemon.service';

import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-poke-catalogue',
  templateUrl: './poke-catalogue.component.html',
  styleUrls: ['./poke-catalogue.component.scss']
})

export class PokeCatalogueComponent implements OnInit {
  
  datas:any[] = [];
  pokemons:any[] = [];
  imageUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/';
  ;
  searchText = '';

  constructor(private pokeService: PokemonService, private router: Router ) { }
  
  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons(){
    let pokemonData;

    for (let i = 1; i <= 150; i++) {
      this.pokeService.getPokemons(i).subscribe(
        res =>{
          pokemonData = {
            idn: res.id+'',
            id: res.id,
            image: `${this.imageUrl}${res.id}.png`,
            name: res.name,
            type: res.types,
          }
          this.datas.push(pokemonData);
          /*Algoritmo burbuja para acomodar los pokemones por orden*/
          this.datas.sort(function (a, b) {
              if (a.id > b.id) {
                return 1;
              }if (a.id < b.id) {
                return -1;
              }
              return 0;
          })
        },
        err=>{
          console.log(err);
          
        }
      );     
    this.pokemons = this.datas;
    }
    console.log(this.datas);
  }

  searchPokemons() {
    this.pokemons = this.datas.filter(
      (pokemon) =>
        pokemon.name.toLocaleLowerCase().includes(this.searchText.toLocaleLowerCase()) ||
        pokemon.idn.toLocaleLowerCase().includes(this.searchText.toLocaleLowerCase()));
        

  }

  getPokemonInfo(pokemoninfo : any){
    //console.log(row);
    this.router.navigateByUrl(`pokeDetail/${pokemoninfo.id}`)
  }

}

