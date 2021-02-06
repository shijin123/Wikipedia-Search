import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ResultsDisplayService {

  constructor(private httpclient: HttpClient) { }

  getWikiDetails(term){
    return this.httpclient.get(
        'https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&origin=*&srsearch=' +
        term
        );
  }
}
