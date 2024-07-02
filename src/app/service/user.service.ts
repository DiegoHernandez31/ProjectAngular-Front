import { User } from '../../models/User.model'
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private http = inject(HttpClient)

  constructor() { }

  register(formValues: User ) {
    return this.http.post("http://localhost:3000/api/users",
      {
        firstname: formValues.firstname,
        lastname: formValues.lastname,
        email: formValues.email,
        password: formValues.password
      }
    )
  }

  login(formValues: any) {
    return this.http.post("http://localhost:3000/api/users/login", {
      email: formValues.email,
      password: formValues.password,
    })
  }

  isLogged() {
    if(localStorage.getItem("user_token")) {
      return true
    } else {
      return false
    }
  }

}
