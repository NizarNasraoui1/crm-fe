import { HttpClient } from '@angular/common/http';
import { ContactServiceService } from './../../service/contact-service.service';
import { Component, OnInit } from '@angular/core';
import { Contact } from '../../models/contact';
import { SearchFields } from 'src/app/util/models/searchFields';
import { FilteredPageWrapper } from 'src/app/util/models/filteredPageWrapper';
import { PageRequestParams } from 'src/app/util/models/pageRequestParams';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

    contacts:Contact[]=[];

  constructor(private contactService:ContactServiceService,private http:HttpClient) { }

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
    console.log($event)
    let pageRequest=new PageRequestParams($event.page,$event.pageCount);
    let searchFields=new SearchFields(["firstName"]);
    this.getContactPage(searchFields,pageRequest);
  }

}
/*
{
  "page": 1,
  "first": 10,
  "rows": 10,
  "pageCount": 12
}
*/
