import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-poke-detail',
  templateUrl: './poke-detail.component.html',
  styleUrls: ['./poke-detail.component.scss']
})
export class PokeDetailComponent implements OnInit {

  pokemon: any = '';
  pokemonImg = '';
  pokemonType = [];
  imageUrl ='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/';

  constructor(private pokemonService: PokemonService, private activatedRoute: ActivatedRoute, private router:Router) {
    this.activatedRoute.params.subscribe(
      params => {
        this.getPokemon(params['id']);
      }
    )
  }
  getPokemon(id: any) {

    this.pokemonService.getPokemons(id).subscribe(
      res => {
        this.pokemon = res;
        this.pokemonImg = `${this.imageUrl}${this.pokemon.id}.png`
        console.log(this.pokemon);
      },
      err => {
        console.log(err);
      }
    )
  }
  ngOnInit(): void {
  }
    
  home() {
    this.router.navigateByUrl('/homeCatalogue');
  }
}
