import {Component, OnInit} from '@angular/core';
//const varible contains some static data
import { allBooks, allReaders} from "./data";
import {Observable, of, from, fromEvent, concat} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  title = 'app';
  source1$;
  source2$;

  ngOnInit(){
    this.source1$ = of(10, true, "sam", "good mrng");
    //this.source1$.subscribe(data => console.log(data));
    console.log("<<**---------------------------**>>");
    this.source2$ = from(allBooks);
    //this.source2$.subscribe(book => console.log(book.title));

    //How to combine two observables ?
    concat(this.source1$, this.source2$).subscribe(data => console.log(data));
    //concat returns a single observable that produce all the values from the first observable and second observable


  }
}
