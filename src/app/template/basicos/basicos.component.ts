import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  @ViewChild('miForm') miForm!: NgForm

  initForm = {
    produc: 'RTX 4080ti',
    price: 500,
    stocks: 10
  }

  constructor() { }

  ngOnInit(): void {
  }

  save(){
    //console.log( this.miForm )
      console.log('Posteo')

      this.miForm.resetForm({
        produc: 'Algo',
        price: 0,
        stocks: 0
      });
  
  }
  
  validName(): boolean {

    return this.miForm?.controls.produc?.invalid && 
                this.miForm?.controls.produc?.touched
  }

  validPrice(): boolean{

    return     this.miForm?.controls.price?.touched &&
              this.miForm?.controls.price?.value < 0;
  }


}
