import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpUtilService {

  constructor(private http:HttpClient) { }

    get(url:string,requestParams?:any):Observable<any>{
        return this.http.get(url,requestParams);

    }
    post(url:string,body:any,requestParams?:any):Observable<any>{
        return this.http.post(url,body,requestParams);
    }

    put(url:string,body:any):Observable<any>{
        return this.http.get(url,body);
    }

    delete(url:string):Observable<any>{
        return this.http.get(url);
    }

}
