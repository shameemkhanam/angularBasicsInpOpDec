import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'AngularApp1';
  message =
    'Angular is a javascript framework to make single page applications.';
  dataArr = [
    { name: 'shikha', age: 23 },
    { name: 'reema', age: 24 },
    { name: 'sheena', age: 33 },
    { name: 'tina', age: 32 },
    { name: 'rekha', age: 25 },
    { name: 'seema', age: 43 },
  ];

  searchText: string = "";
  onSearchTextEntered(srchVal:string) {
    this.searchText = srchVal;
    // console.log(this.searchText);
    
  }
}
