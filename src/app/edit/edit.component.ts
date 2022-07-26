import { Component, OnInit } from '@angular/core';
import { LISTEPOKEMONS } from 'src/db/listePokemons';
import { Pokemon } from '../model/pokemon';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadService } from '../service/load.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  listDePokemons = LISTEPOKEMONS;

  pokemon:Pokemon = new Pokemon(); // je cree une nouvelle instance de pokemon
  constructor(private activeRoute: ActivatedRoute, private route: Router,private loadService:LoadService) { }

  //recuper l'id dans l'url

  //recuperer le pokemo qui a le meme id dans le tableau de pokemon

  //cree une fonction qui modifi ce pokemon et fait un retour a la page detail en affichant le pokemon modifier

  ngOnInit(): void {
   let nombreURL = this.activeRoute.snapshot.params['id'];
    this.pokemon = this.loadService.getPokemonById(nombreURL);

}
back(){
  this.route.navigate([``]);
}
validate(){
  this.route.navigate(['/detail', this.pokemon.id])
}
}


