import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { Router, RouterModule } from '@angular/router';



export interface PeriodicElement {
  name: any;
  code: any;
  numbers: any;
  date: any;
  time: any;
  type: any;
  amount: any;
  payment: any;
  status: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {code: 1, name: 'Minerva Simeon', numbers: '0963541734', date: '', time: '', type: 'Pick-up', amount: '', payment: 'Unpaid', status: 'Pending'},
  {code: 2, name: 'Creya Mismon', numbers: '0956834855', date: '09/04/24', time: '09:04:02', type: 'Pick-up', amount: '190.00', payment: 'BPI', status: 'Washing'},
  {code: 3, name: 'Luthia Gripi', numbers: '0948652374', date: '09/06/24', time: '01:19:02', type: 'Drop-off', amount: '530.00', payment: 'Unpaid', status: 'Washing'},
  {code: 4, name: 'Maria Mies', numbers: '0989567354', date: '09/10/24', time: '11:47:02', type: 'Drop-off', amount: '270.00', payment: 'Gcash', status: 'Receive'},
  {code: 5, name: 'Corina Verna', numbers: '0956148568', date: '', time: '', type: 'Drop-off', amount: '', payment: 'Unpaid', status: 'Pending'},
  {code: 6, name: 'Opebg Kysv', numbers: '09218787394',date: '09/13/24', time: '04:17:02', type: 'Drop-off', amount: '165.00', payment: 'Cash', status: 'Receive'}
];


@Component({
  selector: 'app-receiving',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, RouterModule],
  templateUrl: './receiving.component.html',
  styleUrl: './receiving.component.css'
})
export class ReceivingComponent {
  displayedColumns = ['code', 'name', 'numbers', 'date', 'time', 'type', 'amount', 'payment', 'status'];
  dataSource = ELEMENT_DATA;

  constructor(
    private route: Router
  ){}

  nav(){
    this.route.navigate(['./mainpage/home/homemain/laundryDetails']);
  }
}
