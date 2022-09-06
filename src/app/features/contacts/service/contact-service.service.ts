import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';
import { HttpUtilService } from 'src/app/util/service/http-util.service';
import { SearchFields } from 'src/app/util/models/searchFields';
import { PageRequestParams } from 'src/app/util/models/pageRequestParams';
import { FilteredPageWrapper } from 'src/app/util/models/filteredPageWrapper';

const contactFilterUrl="/api/contact/filter/";
@Injectable({
  providedIn: 'root'
})
export class ContactServiceService {

  constructor(private httpUtilService: HttpUtilService) {
  }


  getContactPage(searchFields:SearchFields,pageRequestParams:PageRequestParams):Observable<FilteredPageWrapper<Contact>>{
    return this.httpUtilService.post(contactFilterUrl,searchFields,pageRequestParams);
  }
}
