import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-staff-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './staff-login.component.html',
  styleUrl: './staff-login.component.css'
})
export class StaffLoginComponent {
  constructor(
    private route: Router
  ){}

  login(){
    this.route.navigate(['./mainpage']);
  }
}
