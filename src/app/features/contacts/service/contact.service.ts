import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';
import { HttpUtilService } from 'src/app/util/service/http-util.service';
import { SearchFields } from 'src/app/shared/models/searchFields';
import { PageRequestParams } from 'src/app/shared/models/pageRequestParams';
import { FilteredPageWrapper } from 'src/app/shared/models/filteredPageWrapper';
import { SearchParams } from 'src/app/shared/models/searchParams';

const contactUrl="/api/contact";


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private httpUtilService: HttpUtilService) {
  }


  getContactPage(searchFields:SearchFields,pageRequestParams:PageRequestParams):Observable<FilteredPageWrapper<Contact>>{
    return this.httpUtilService.post(`${contactUrl}/filter`,searchFields,pageRequestParams);
  }

  getContactById(id:number):Observable<Contact>{
    return this.httpUtilService.get(`${contactUrl}/${id}`);
  }
  
  addContact(contact:Contact):Observable<Contact>{
    return this.httpUtilService.post(`${contactUrl}`,contact);
  }

  getSearchParams():Observable<SearchParams>{
    return this.httpUtilService.get(`${contactUrl}/searchParams`);
  }

  updateContact(id:number,contact:Contact):Observable<Contact>{
    return this.httpUtilService.put(`${contactUrl}/details/${id}`,contact);
  }

  deleteCotnact(id:number):Observable<any>{
    return this.httpUtilService.delete(`${contactUrl}/${id}`);
  }
}
