import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';
import { HttpUtilService } from 'src/app/util/service/http-util.service';
import { SearchFields } from 'src/app/util/models/searchFields';
import { PageRequestParams } from 'src/app/util/models/pageRequestParams';
import { FilteredPageWrapper } from 'src/app/util/models/filteredPageWrapper';

const contactFilterUrl="/api/contact";


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private httpUtilService: HttpUtilService) {
  }


  getContactPage(searchFields:SearchFields,pageRequestParams:PageRequestParams):Observable<FilteredPageWrapper<Contact>>{
    return this.httpUtilService.post(`${contactFilterUrl}/filter`,searchFields,pageRequestParams);
  }

  deleteCotnact(id:number):Observable<any>{
    console.log(`${contactFilterUrl}/${id}`)
    return this.httpUtilService.delete(`${contactFilterUrl}/${id}`);
  }
}
