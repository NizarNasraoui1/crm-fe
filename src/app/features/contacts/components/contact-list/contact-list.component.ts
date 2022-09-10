import { HttpClient } from '@angular/common/http';
import { ContactService } from './../../service/contact.service';
import { Component, OnInit } from '@angular/core';
import { Contact } from '../../models/contact';
import { SearchFields } from 'src/app/shared/models/searchFields';
import { FilteredPageWrapper } from 'src/app/shared/models/filteredPageWrapper';
import { PageRequestParams } from 'src/app/shared/models/pageRequestParams';
import { MessageService } from 'primeng/api';
import { SearchParams } from 'src/app/shared/models/searchParams';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
})
export class ContactListComponent implements OnInit {

  contacts:Contact[]=[];
  searchParams:SearchParams;
  constructor(private contactService:ContactService,private http:HttpClient,private messageService: MessageService) { }

  ngOnInit(): void {
    this.contactService.getSearchParams().subscribe((res) => {
      this.searchParams = res;
      let pageRequest = new PageRequestParams(0, 10);
      let searchFields = new SearchFields([this.searchParams.searchFields[0].name]);
      this.getContactPage(searchFields, pageRequest);
    });
    

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
    },
    (error)=>{
      this.messageService.add({severity:'error', summary: 'Warn', detail: 'Delete fails'});
    })
  }

}
