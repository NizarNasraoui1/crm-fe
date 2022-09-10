import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SaveRequest } from 'src/app/shared/models/saveRequest';
import { HttpUtilService } from 'src/app/util/service/http-util.service';
import { Contact } from '../../models/contact';
import { ContactService } from '../../service/contact.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-contact-tabs',
  templateUrl: './contact-tabs.component.html',
  styleUrls: ['./contact-tabs.component.scss']
})
export class ContactTabsComponent implements OnInit {
  contact:Contact;
  constructor(private route:ActivatedRoute,private contactService:ContactService,private messageService: MessageService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params)=>{
      let id=params.get('id');
      if(id){
        this.contactService.getContactById(parseInt(id)).subscribe((res)=>{
          this.contact=res;
        })
      }
    })
  }

  updateContact(contact:Contact){
    this.contactService.updateContact(this.contact.id,contact).subscribe({
      next: ()=>{
        this.messageService.add({severity:'info', summary: 'Info', detail: 'Contact Updated Succefully'});
      },
      error: ()=>{
        this.messageService.add({severity:'error', summary: 'Warn', detail: 'Cannot Update Contact'});
      }
    })
  }




  

}
