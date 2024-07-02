import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { redirectIfLogged } from './guards/redirectIfLogged.guard';
import { HomeLoggedComponent } from './pages/home-logged/home-logged.component';
import { LoginAdminComponent } from './pages/login-admin/login-admin.component';
import { RegisterAdminComponent } from './pages/register-admin/register-admin.component';
import { HomeAdminComponent } from './pages/home-admin/home-admin.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'register', component: RegisterComponent, canActivate: [redirectIfLogged] },
    { path: 'login', component: LoginComponent, canActivate: [redirectIfLogged]},
    { path: 'detail', component: ProductDetailComponent},
    { path: 'list', component: ProductListComponent},
    { path: 'home', component: HomeLoggedComponent},
    { path: 'login-admin', component: LoginAdminComponent},
    { path: 'register-admin', component: RegisterAdminComponent},
    { path: 'home-admin', component: HomeAdminComponent}

];
