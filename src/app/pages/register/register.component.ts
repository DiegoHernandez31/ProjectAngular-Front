import { Component, inject, signal } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLinkWithHref } from '@angular/router'
import { UserService } from '../../service/user.service';
import { User } from '../../../models/User.model';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, ReactiveFormsModule, RouterLinkWithHref],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
private userService = inject(UserService)
private router = inject(Router)

  constructor() {}

  registerForm = new FormGroup({
    name: new FormControl("", {
      validators: [Validators.required]
    }),
    lastname: new FormControl("", {
      validators: [Validators.required]
    }),
    email: new FormControl("", {
      validators: [Validators.required]
    }),
    password: new FormControl("", {
      validators: [Validators.required]
    })
  })

  onSubmit(event: Event) {
    if (this.registerForm.valid) {
      console.log("Podemos enviar la información")
      this.userService.register(this.registerForm.value as User).subscribe({
        next: response => {
          this.router.navigate(["/login"])
        },
        error: error => {
          console.log(error)
        }
      })
    } else {
      console.log("Campos no válidos")
    }
  }

  footer = signal(true);

}
