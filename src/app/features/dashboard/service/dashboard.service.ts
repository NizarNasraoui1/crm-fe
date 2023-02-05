import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpUtilService } from 'src/app/util/service/http-util.service';
import { Statistics } from '../model/statistics';

const contactUrl="/api/statistics";

@Injectable()
export class DashboardService {

  constructor(private httpUtil:HttpUtilService) { }

  getStatistics():Observable<Statistics>{
    return this.httpUtil.get(contactUrl);
  }
}
