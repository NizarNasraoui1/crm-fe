import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {
  contactForm:FormGroup;
  constructor() {
    this.contactForm=new FormGroup({
      firstName:new FormControl(null,[Validators.required,Validators.minLength(1)]),
      lastName:new FormControl(null),
      address:new FormControl(null),
      email:new FormControl(null,[Validators.required,Validators.email])
    });
   }

  ngOnInit(): void {
  }

  onSubmit(){
    
  }

}
