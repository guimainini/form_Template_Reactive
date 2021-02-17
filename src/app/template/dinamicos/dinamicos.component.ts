import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';


interface Person {
  name: string;
  favorite: Favorite[];
}

interface Favorite {
  id: number;
  name: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent   {

  nuevoJuego: string='';


  person: Person = {
    name: 'Guillermo',
    favorite:[
      { id: 1, name: 'Metal Gear'},
      { id: 2, name: 'DeathStraning'}

    ]
  }
  
  save(){
    console.log('Form posteado');
  }
 
  eliminar( index:number ){
    this.person.favorite.splice(index, 1);
  }

  agregarJuego(){
    const newFavorite: Favorite = {
        id: this.person.favorite.length + 1,
        name: this.nuevoJuego

    }

    this.person.favorite.push({...newFavorite});
    this.nuevoJuego= '';
  }
}


