import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-laundry-details',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './laundry-details.component.html',
  styleUrl: './laundry-details.component.css'
})
export class LaundryDetailsComponent {
  constructor(
    private route: Router
  ){}

  back(){
    this.route.navigate(['./mainpage/home/homemain/homepage'])
  }
}
