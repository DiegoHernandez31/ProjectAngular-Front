import { Component, inject } from '@angular/core';
import { Router, RouterLinkWithHref } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../service/auth.service';
import { AdminService } from '../../service/admin.service';

@Component({
  selector: 'app-header-admin',
  standalone: true,
  imports: [RouterLinkWithHref, CommonModule],
  templateUrl: './header-admin.component.html',
  styleUrl: './header-admin.component.css'
})
export class HeaderAdminComponent {

  private adminService = inject(AdminService)
  private authService = inject(AuthService)
  private router = inject(Router)

  isLogged() {
    return this.adminService.isLogged()
  }

  logout() {
    this.authService.removeToken()
    this.router.navigate(["/login-admin"])
  }

}
