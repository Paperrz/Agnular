import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LISTEPOKEMONS } from 'src/db/listePokemons';
import { Pokemon } from '../model/pokemon';

@Injectable({
  providedIn: 'root'
})
export class LoadService {
pokemon: Pokemon = new Pokemon();



getPokemons(){
  return LISTEPOKEMONS;
}

getPokemonById(params:any){ // retourne le pokemon dont l'id est passé en parametre
  for (let i = 0; i < this.getPokemons().length; i++) {
    if (this.getPokemons()[i].id == params){
    this.pokemon = this.getPokemons()[i];
   }
  }
  return this.pokemon;
}

//meme choses avec filter et include
//get PokemonsByType(id:numer)
//return this.getPokemons().filter(pokemon => pokemon.id == id)



}
