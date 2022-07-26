import { Component, OnInit } from '@angular/core';
import { LISTEPOKEMONS } from 'src/db/listePokemons'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
listDePokemons = LISTEPOKEMONS;
text:string ="bjr"
  constructor() { }

  ngOnInit(): void {

  }

  filterPokemon(value:string){
    console.log(value)
    this.listDePokemons = LISTEPOKEMONS;
    for(let i = this.listDePokemons.length-1; i >= 0; i--){
      if (this.listDePokemons[i].name.toLowerCase().includes(value.toLowerCase())){

      }else{
        this.listDePokemons.splice(i,1)
      }
    }
  }
  choixDeLaClasse(type:string){
    let classe = '';
    switch(type){

    case 'Poison':{
        classe='poison'
    break;
      }
    case 'eau':{
      classe='eau'
      break;
    }
    case 'feu':{
      classe='feu'
      break;
    }
    case'plante':{
      classe='plante'
      break;
    }
    case'Electrique':{
      classe='elec'
      break;
    }
    case'Normal':{
      classe='normal'
      break;
    }
    case'fee':{
      classe='fee'
      break;
    }
    case'Insecte':{
      classe='insecte'
      break;
    }
  }
    return classe
  }

}

