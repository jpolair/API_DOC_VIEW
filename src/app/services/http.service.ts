import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  public getDatasApi() {
    return this.http.get('../../assets/datasApi.json');
  }

  public addComment(comment: any) {
    return this.http.put('../../assets/datasApi.json', { comment: comment });
  }


}
