import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, Validator } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html'
})
export class BasicosComponent implements OnInit{

  // miForm: FormGroup = new FormGroup({
  //   'name'   : new FormControl('RTX 4080ti'),
  //   'price'  : new FormControl(1500),
  //   'stocks' : new FormControl(5)
  // })

  miForm: FormGroup = this.fb.group({
                          //validadores sincronos//validadores asincronos
    name    : [ , [Validators.required, Validators.minLength(3)], ],
    price   : [ , [Validators.min(0),Validators.required], ],
    stocks  : [ , [Validators.min(0),Validators.required], ],
  })


  constructor( private fb: FormBuilder ) { }

  ngOnInit(){
    this.miForm.setValue({
      name   : ' RTX 4080ti',
      price  : 1600,
      stocks : 10
    })
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
    this.miForm.reset();
    

  }

}
