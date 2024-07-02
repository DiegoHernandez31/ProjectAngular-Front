import { Component, inject } from '@angular/core';
import { Router, RouterLinkWithHref } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../service/auth.service';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-header-logged',
  standalone: true,
  imports: [],
  templateUrl: './header-logged.component.html',
  styleUrl: './header-logged.component.css'
})
export class HeaderLoggedComponent {

  private userService = inject(UserService)
  private authService = inject(AuthService)
  private router = inject(Router)

  isLogged() {
    return this.userService.isLogged()
  }

  logout() {
    this.authService.removeToken()
    this.router.navigate(["/login"])
  }

}
