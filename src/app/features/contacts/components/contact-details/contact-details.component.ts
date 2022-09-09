import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Contact} from '../../models/contact';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit,OnChanges {
  @Input() contact:Contact;
  @Input() componentType!:string;
  @Output() savedContact=new EventEmitter<Contact>;  
  contactForm:FormGroup;

  constructor() {
    this.contactForm=new FormGroup({
      firstName:new FormControl(null,[Validators.required,Validators.minLength(1)]),
      lastName:new FormControl(null),
      address:new FormControl(null),
      email:new FormControl(null,[Validators.required,Validators.email])
    });
   }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.contact)
    if(this.contact && this.componentType==='update'){
        this.contactForm.reset({
        firstName:this.contact.firstName,
        lastName:this.contact.lastName,
        address:this.contact.address,
        email:this.contact.email
      })
    }

  }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.componentType==='update'){
      let newContact:Contact=this.contactForm.value;
      newContact.id=this.contact.id;
      this.savedContact.emit(newContact);
    }
    
  }

}
