import { Component, signal, inject } from '@angular/core';
import { Router, RouterLinkWithHref } from '@angular/router'
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { UserService } from '../../service/user.service';
import { AuthService } from '../../service/auth.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterLinkWithHref, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  private router = inject(Router)
  private userService = inject(UserService)
  private authService = inject(AuthService)

  loginForm = new FormGroup({
    email: new FormControl("", {
      validators: [Validators.required]
    }),
    password: new FormControl("", {
      validators: [Validators.required]
    })
  })

  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value)
      this.userService.login(this.loginForm.value).subscribe({
        next: (response: any) => {
          this.authService.setToken(response.token)
          this.router.navigate(["/home"])
        },
        error: error => {
          console.log(error)
        }
      })
    } else {
      console.log("Campos no validos")
    }
  }

  footer = signal(true);

}
