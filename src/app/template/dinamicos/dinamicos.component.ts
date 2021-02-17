import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {


 

  constructor() { }

  ngOnInit(): void {
  }

  save(){
    console.log('Form posteado');
    
  }


}
