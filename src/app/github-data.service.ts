import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import {Category} from './Category';

@Injectable({
  providedIn: 'root'
})
export class GithubDataService {

  constructor(private httpClient: HttpClient) { }
  //baseApiUrl:string="https://api.github.com/repos/wangrusharon/MySampleRepository/";
  //apiUrl:string=this.baseApiUrl+"git/trees/7d4ec02921ec1d13edb41f084819fc8e176983fa?recursive=1";
  baseApiUrl:string ="https://github.dxc.com/api/v3/repos/AET/photon/";
  folderSha:string="3127a679ace8648cbfc7e95a97552d6fcf8afc5f"
  accessToken:string="79e7a15b898834756be093cf66f22f5538f534f2";
  apiUrl:string=this.baseApiUrl+"git/trees/"+this.folderSha+"?recursive=1&access_token="+this.accessToken;
  



  getCategories(): Observable<any>{

   return this.httpClient.get(this.apiUrl).pipe(
            map(this.extractData));
}


  private extractData(res:Response){
    let body=res;
    return body||{};
  }
 private handleError(error:any)
 {

 }

 getFileContent(path){
   return this.httpClient.get(this.baseApiUrl+"contents/Categories/"+path+"?access_token="+this.accessToken).pipe(map(this.extractData))
 }
}

