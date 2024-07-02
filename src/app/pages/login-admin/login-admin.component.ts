import { Component, signal, inject } from '@angular/core';
import { Router, RouterLinkWithHref } from '@angular/router'
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { AdminService } from '../../service/admin.service';
import { AuthService } from '../../service/auth.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-admin',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, ReactiveFormsModule],
  templateUrl: './login-admin.component.html',
  styleUrl: './login-admin.component.css'
})
export class LoginAdminComponent {

  private router = inject(Router)
  private adminService = inject(AdminService)
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
      this.adminService.login(this.loginForm.value).subscribe({
        next: (response: any) => {
          this.authService.setToken(response.token)
          this.router.navigate(["/home-admin"])
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
