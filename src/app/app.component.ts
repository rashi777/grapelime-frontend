import { HttpClient } from '@angular/common/http';
import {Component} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

/**
 * @title Drag&Drop sorting
 */
 @Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  path: string = 'http://localhost:3001'

  entries: any = [
  ];

  constructor(private http: HttpClient) { 
    this.http.get(this.path+ '/getentries').subscribe((result: any) => {
      this.entries = result.data
    })
  }

  drop(event: any) {
    moveItemInArray(this.entries, event.previousIndex, event.currentIndex);
    this.http.post(this.path+ '/updateentries', {data: this.entries}).subscribe((result: any) => {
      this.entries = result.data
    })
  }
}
