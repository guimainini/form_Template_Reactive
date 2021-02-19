import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, Validator, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent   {

  miForm: FormGroup = this.fb.group({
                      //validadores sincronos//validadores asincronos
      name     : [ '', [Validators.required, Validators.minLength(3)], ],
      favority : this.fb.array( [
        ['Metal Gear', Validators.required],
        ['Death Stranding', Validators.required]
      ], Validators.required )
  });

  newFavority: FormControl = this.fb.control('', Validators.required);



  constructor( private fb: FormBuilder ) { }


  get favoritosArr() {
    return this.miForm.get('favority') as FormArray;
  }

  validField( campo: string ) {
    return this.miForm.controls[campo].errors && this.miForm.controls[campo].touched
  }
  
  save(){

    if(this.miForm.invalid){
      this.miForm.markAllAsTouched();
      return;
    }
    console.log(this.miForm.value);
  }  




  addFavority(){
    if( this.newFavority.invalid ){
      return;
    }

    //this.favoritosArr.push( new FormControl(this.newFavority.value, Validators.required));
    this.favoritosArr.push( this.fb.control(this.newFavority.value, Validators.required) );
    this.newFavority.reset();

  }

  // eliminar( index:number ){
  //   this.person.favorite.splice(index, 1);
  // }

  delete( index:number ){
    //console.log(index);
    this.favoritosArr.removeAt(index);
    
    
  }


}
