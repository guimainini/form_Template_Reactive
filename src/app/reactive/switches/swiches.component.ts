import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, Validator } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './swiches.component.html',
  styles: [
  ]
})
export class SwichesComponent implements OnInit  {

  miForm:FormGroup= this.fb.group({
    gender: [ 'M', Validators.required],
    notify: [ true, Validators.required],
    condicion: [false, Validators.requiredTrue]

  });

  person= {
    gender : 'F',
    notify : true
  } 

  constructor( private fb: FormBuilder ) { }

  ngOnInit(){
    this.miForm.reset({
      ...this.person,
    condicion: false
  });

  // this.miForm.get('condicion')?.valueChanges.subscribe( newValue => {
  //   console.log( newValue );
  // } )
    
  
  this.miForm.valueChanges.subscribe( form => {
    delete form.condicion;
    this.person = form;
    
  } )

    

    


  }

  save(){
    const formValue = {...this.miForm.value}
      //delete formValue.condicion;

      console.log(formValue);
      
      this.person = formValue;

  }
}
