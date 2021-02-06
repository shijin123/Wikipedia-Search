import { Component } from '@angular/core';
import { ResultsDisplayService } from './results-display.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  term: any;
  element:any;
  details:any = {};
  searchMatch: any;
  buttonPressed = false;
  constructor(private resultsDisplayService: ResultsDisplayService){}

  onSubmit(){
    this.element = document.getElementById('search');
    if(this.element.value){
      this.term = this.element.value;
    }
    this.buttonPressed = true;
    this.resultsDisplayService.getWikiDetails(this.term)
      .subscribe(res => {
      this.details = res;
      this.details = this.details.query.search;
      console.log(this.details);
    });
 
  }
  title = 'WikiSearch';
}
