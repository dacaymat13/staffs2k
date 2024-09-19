import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-cust-history',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './cust-history.component.html',
  styleUrl: './cust-history.component.css'
})
export class CustHistoryComponent {
  constructor(
    private route: Router
  ){}
  back(){
    this.route.navigate(['./mainpage/customers/custpage/custlist'])
  }
}
