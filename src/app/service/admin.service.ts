import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor() { }

  private http = inject(HttpClient)

login(formValues: any) {
  return this.http.post("http://localhost:3000/api/admin/loginAdmin", 
  {
    email: formValues.email,
    password: formValues.password
  }
)
}

register(formValues: any) {
  return this.http.post("http://localhost:3000/api/admin",
    {
      firstname: formValues.firstname,
      lastname: formValues.lastname,
      email: formValues.email,
      password: formValues.password
    }
  )
}

isLogged() {
  if(localStorage.getItem("user_token")) {
    return true
  } else {
    return false
  }
}

}