import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-cust-history',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './cust-history.component.html',
  styleUrl: './cust-history.component.css'
})
export class CustHistoryComponent {
  today: any;

  constructor(
    private route: Router
  ){
    this.today = ''; // Initialize today
  }
  back(){
    this.route.navigate(['./mainpage/customers/custpage/custlist'])
  }


  ngOnInit(): void {
    const date = new Date();
    this.today = date.toISOString().split('T')[0];
  }
}
