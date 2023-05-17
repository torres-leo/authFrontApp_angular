import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  constructor() {}

  emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  public myForm: FormGroup = this.fb.group({
    email: [
      'leo@test.com',
      [Validators.required, Validators.pattern(this.emailPattern)],
    ],
    password: ['123456', [Validators.required, Validators.minLength(6)]],
  });

  login() {
    const { email, password } = this.myForm.value;

    this.authService.login(email, password).subscribe({
      next: (response) => {
        this.router.navigateByUrl('/dashboard');
      },
      error: (error) => {
        this.alert.fire({
          icon: 'error',
          text: error,
        });
      },
    });
  }

  alert = Swal.mixin({
    toast: true,
    position: 'bottom-end',
    showConfirmButton: false,
    timer: 4000,
    timerProgressBar: true,

    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    },
  });
}
