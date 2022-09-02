import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpUtil } from 'src/app/util/service/HttpUtil';

@Injectable({
  providedIn: 'root'
})
export class ContactServiceService {

  constructor(private h:HttpClient) {
  }

  getContactFilteredPage():Observable<any>{
    return this.h.post("/api/contact/filter",{
        "searchFields":["firstName"]
    });
  }
}
