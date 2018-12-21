import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, RequiredValidator, Validators, FormArray } from '@angular/forms';
import { CustomValidators } from 'src/shared/name-validate-directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  form: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      project : new FormControl(null, [Validators.required, CustomValidators.forbiddenNameValidator(/test/i)]),
      mail : new FormControl(null, [Validators.required, Validators.email]),
      status : new FormControl('stable', [Validators.required]),
      topics : new FormArray([])
    });
  }

  onAddTopic() {
    (<FormArray>this.form.get('topics')).push(new FormControl(null, Validators.required));
  }

  onSubmit() {
    console.log(this.form);
  }


}
