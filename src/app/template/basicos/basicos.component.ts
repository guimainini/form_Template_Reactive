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

  constructor() { }

  ngOnInit(): void {
  }

  save(){
    console.log( this.miForm )
  }
  
  validName(): boolean {
    return this.miForm?.controls.produc?.invalid && 
                this.miForm?.controls.produc?.touched
  }


}
