import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
})
export class RegisterPageComponent {
  private fb = inject(FormBuilder);

  constructor() {}

  emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  public myForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    name: [
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(20)],
    ],
  });

  login() {
    console.log(this.myForm.value);
  }
}
