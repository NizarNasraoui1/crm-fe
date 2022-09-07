import { HttpClient } from '@angular/common/http';
import { ContactService } from './../../service/contact.service';
import { Component, OnInit } from '@angular/core';
import { Contact } from '../../models/contact';
import { SearchFields } from 'src/app/util/models/searchFields';
import { FilteredPageWrapper } from 'src/app/util/models/filteredPageWrapper';
import { PageRequestParams } from 'src/app/util/models/pageRequestParams';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
})
export class ContactListComponent implements OnInit {

    contacts:Contact[]=[];

  constructor(private contactService:ContactService,private http:HttpClient,private messageService: MessageService) { }

  ngOnInit(): void {
    let pageRequest=new PageRequestParams(0,10);
    let searchFields=new SearchFields(["firstName"]);
    this.getContactPage(searchFields,pageRequest);

  }

  getContactPage(searchFields:SearchFields,pageRequest:PageRequestParams){
    this.contactService.getContactPage(searchFields,pageRequest).subscribe((res:FilteredPageWrapper<Contact>)=>{
        this.contacts=res.results;
    })
  }


  onPageChange($event:any){
    let pageRequest=new PageRequestParams($event.page,$event.rows);
    let searchFields=new SearchFields(["firstName"]);
    this.getContactPage(searchFields,pageRequest);
  }

  deleteContact(id:number){
    this.contactService.deleteCotnact(id).subscribe((res)=>{
      this.messageService.add({severity:'success', summary: 'Success', detail: 'Deleted Succefully'});
    })
  }

}
