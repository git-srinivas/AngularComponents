import { Component, Input, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

import { SearchService } from '../../services/search.Service';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';

@Component({
  selector: 'home',
   templateUrl: './home.component.html',
 styleUrls: [ './home.component.css' ]
})
export class HomeComponent  {
results: any[] = [];
queryField: FormControl = new FormControl();
colors:Array<string> =  ["list-group-item-primary","list-group-item-secondary","list-group-item-success","list-group-item-danger","list-group-item-warning","list-group-item-info","list-group-item-light","list-group-item-dark"];
 constructor(private _searchService: SearchService) { }
 public ngOnInit() {
    this.queryField.valueChanges
 .subscribe(queryField =>this._searchService.search(queryField)
 .subscribe(response => {
   this.results = response.json().results;
   this.results.map(item => { 
     item.color = this.getRandomColor()
   })  
 }));


}
getRandomColor(){
  const min=0,max=this.colors.length-1;
  const randomColor = this.colors[Math.floor(Math.random() * (max - min + 1)) + min];
  //this.cdRef.detectChanges(); 
  return 'list-group-item '+randomColor;
     
}

}
