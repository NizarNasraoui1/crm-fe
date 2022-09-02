import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



export abstract class HttpUtil {
    constructor(protected http:HttpClient) {

    }
    get(url:string):Observable<any>{
        return this.http.get(url);

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
