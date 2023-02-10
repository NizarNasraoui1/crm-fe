import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpUtilService } from 'src/app/util/service/http-util.service';



const FileApiUrl="/api/file";

@Injectable({
    providedIn: 'root'
  })
export class FileService {

  constructor(private httpUtil:HttpUtilService) { }

  getFileList(crmBaseEntityId:number):Observable<any>{
    return this.httpUtil.get(`${FileApiUrl}/all/crm-base-entity/${crmBaseEntityId}`);
  }
}
