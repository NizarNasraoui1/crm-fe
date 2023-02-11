import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpUtilService } from 'src/app/util/service/http-util.service';
import { Opportunity } from '../models/opportunity';

const opportunityUrl="api/opportunity";

@Injectable({
  providedIn: 'root'
})
export class OpportunityService {

  constructor(private httpUtil:HttpUtilService) { }

  getAllOpportunities():Observable<Opportunity[]>{
    return this.httpUtil.get(opportunityUrl+"/all");
  }

}
