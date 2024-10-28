import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { ServeService } from '../serve.service';


@Component({
  selector: 'app-staff-login',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, RouterOutlet, RouterLink, FormsModule],
  templateUrl: './staff-login.component.html',
  styleUrl: './staff-login.component.css'
})
export class StaffLoginComponent {
  constructor(
    private route: Router,
    private staffservice: ServeService
  ){}

  email: any;
  password: any;
  
  
  login(){
    this.staffservice.login(this.email, this.password).subscribe(
      (response) => {
        localStorage.setItem('personal_access_token',response.token);
        this.route.navigate(['./mainpage']);
      },
      (error) => {
        console.log('Login error: ', error);
      }
    );
  }
}
