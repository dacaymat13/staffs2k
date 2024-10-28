import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { ServeService } from '../serve.service';

@Component({
  selector: 'app-mainpage',
  standalone: true,
  imports: [RouterModule, CommonModule, NgClass],
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.css'
})
export class MainpageComponent {
  isOpen: boolean = true;
  user: any;
  constructor(
    private router: Router,
    private staffservice: ServeService
  ){}

  ngOnInit():void{
    this.runStaff();
  }

  toggleNav(): void {
    this.isOpen = !this.isOpen;
  }

  runStaff(){
    this.staffservice.getStaff().subscribe(
      (response: any) => {
        this.user = response;
        console.log(this.user.Admin_ID);
        localStorage.setItem('staffId', this.user.Admin_ID);
      },
      (error) => {
        console.error('Error fetching user data', error);
      }   
    );
  };
}
