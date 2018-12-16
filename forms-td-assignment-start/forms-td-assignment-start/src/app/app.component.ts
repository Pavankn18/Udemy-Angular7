import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild( 'form' ) userForm: NgForm;
  formText: string;
  type = 'Basic';

  submit() {
    console.log( this.userForm );
    // this.formText = this.userForm.toString();
    // sleep(10);
    //waits (100); // new Promise(done => setTimeout(done, 500));
    //this.userForm.reset();
    this.setDefault();
  }

  setDefault() {
    this.userForm.form.patchValue({
     // mail: 'test@test'//,
      type: 'Basic'
      //password: 'password'
    });
  }

  ngOnInit(): void {
    //Below line wont have any effect!!
    // this.userForm.form.patchValue({
    //   mail: 'test@test'
    //   , type: 'Basic'
    //   , password: 'password'
    // });
  }
}
