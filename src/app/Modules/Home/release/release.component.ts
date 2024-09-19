import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';

export interface PeriodicElement {
  name: any;
  code: any;
  numbers: any;
  type: any;
  amount: any;
  payment: any;
  complete: any
}

const ELEMENT_DATA: PeriodicElement[] = [
  {code: 1, name: 'Porte Fiosen', numbers: '0963541734', type: 'Pick-up', amount: "230.00", payment: 'Cash', complete: "Complete"},
  {code: 2, name: 'Pleya Forte', numbers: '0956834855', type: 'Deliver', amount: "310.00", payment: 'Unpaid', complete: "Complete"},
  {code: 3, name: 'Luthia Gripi', numbers: '0948652374', type: 'Pick-up',amount: "100.00", payment: 'Gcash', complete: "Complete"},
  {code: 4, name: 'Joasins Qeruv', numbers: '0989567354', type: 'Deliver',amount: "150.00", payment: 'Unpaid', complete: "Complete"}
];
@Component({
  selector: 'app-release',
  standalone: true,
  imports: [MatTableModule, MatButtonModule],
  templateUrl: './release.component.html',
  styleUrl: './release.component.css'
})
export class ReleaseComponent {
  displayedColumns = ['code', 'name', 'numbers', 'type', 'amount', 'payment', 'complete'];
  dataSource = ELEMENT_DATA;

  constructor(
    private route: Router
  ){}

  nav(){
    this.route.navigate(['./mainpage/home/homemain/laundryDetails']);
  }
}
