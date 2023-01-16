import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  validationForm: FormGroup;

  constructor(private router: Router) {
    this.validationForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
  }


  get username(): AbstractControl {
    return this.validationForm.get('username')!;
  }

  get password(): AbstractControl {
    return this.validationForm.get('password')!;
  }

  onSubmit(): void {
    this.validationForm.markAllAsTouched();
    if (this.validationForm.valid) {
      this.router.navigate(['/dashboard']);
    }
  }
}
