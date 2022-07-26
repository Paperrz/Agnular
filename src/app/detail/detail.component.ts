
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LISTEPOKEMONS } from 'src/db/listePokemons';
import { Pokemon } from '../model/pokemon';
import { LoadService } from '../service/load.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
listDePokemons = LISTEPOKEMONS; // on recupere la liste des pokemons
pokemon:Pokemon = new Pokemon(); // je cree une nouvelle instance de pokemon
constructor(private activeRoute: ActivatedRoute, private route: Router,private loadService:LoadService) { }

  nombreURL:any='';


  ngOnInit(): void {// lorsque la page est charger on executre la fonction ngOnInite et le code est dedans

    //1-J'ai besoin de recuperer le numero qui est dans l'url
    this.nombreURL = this.activeRoute.snapshot.params['id']; // recuperer le numero dand l'url
        this.pokemon = this.loadService.getPokemonById(this.nombreURL);

    }
  remove ()
  {
    const index = this.loadService.getPokemons().indexOf(this.pokemon,0);
    if(index > -1){// si l'index est superieur a -1 alors on supprime le pokemon de la liste
      this.loadService.getPokemons().splice(index,1); // on supprime le pokemon de la liste
    }
    this.route.navigate(['']); // on redirige vers la page principale

  }
  back()
  {
    this.route.navigate(['']);
  }
  edit()
  {
    this.route.navigate([`edit/${this.nombreURL}`]);
  }
}
