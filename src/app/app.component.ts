import { Component, Input, OnInit, AfterViewChecked } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  firstForm: FormGroup;

  ngOnInit() {
    this.firstForm = new FormGroup({
      exampleInputEmail: new FormControl(''),
      exampleInputPassword: new FormControl(''),
      exampleCheck: new FormControl(true)
    });
  }

  submitForm() : boolean {
    return false;
  }

  buttonClicked() {
    $('#exampleModal').modal('show');
  }

  ngAfterViewChecked() {
    // here we call jquery functions
    /*$('#exampleModal').on('hidden.bs.modal', function (e) {
      debugger;
    })*/
  }
}
