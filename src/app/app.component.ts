import { Component, Input, OnInit, AfterViewChecked } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  ngAfterViewChecked() {
    // here we call jquery functions
  }
}
