import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpUtilService } from 'src/app/util/service/http-util.service';
import { Statistics } from '../model/statistics';

const contactUrl="/api/statistics";
const notificationUrl="/api/notification"

@Injectable()
export class DashboardService {

  constructor(private httpUtil:HttpUtilService) { }

  getStatistics():Observable<Statistics>{
    return this.httpUtil.get(contactUrl);
  }

  getLastNotifications():Observable<Notification>{
    return this.httpUtil.get(notificationUrl+"/last");
  }
}
