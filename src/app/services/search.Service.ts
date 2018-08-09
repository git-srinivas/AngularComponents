import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
@Injectable()
export class SearchService {
 baseUrl: string = 'https://api.cdnjs.com/libraries';
queryUrl: string = '?search=';
constructor(private _http: Http) { }
search(queryString: string) {
      let _URL = this.baseUrl + this.queryUrl+queryString;
      return this._http.get(_URL);
  }
}