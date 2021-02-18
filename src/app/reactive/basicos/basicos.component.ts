import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html'
})
export class BasicosComponent {

  miForm: FormGroup = new FormGroup({
    'name': new FormControl('RTX 4080ti')
  })



  constructor() { }

  

}
