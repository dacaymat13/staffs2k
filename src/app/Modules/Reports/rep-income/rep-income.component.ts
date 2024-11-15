import { Component, OnInit } from '@angular/core';
import { ServeService } from '../../../serve.service';

@Component({
  selector: 'app-rep-income',
  standalone: true,
  imports: [],
  templateUrl: './rep-income.component.html',
  styleUrl: './rep-income.component.css'
})
export class RepIncomeComponent implements OnInit{
  expense: any;
  totalexpense: any;
  overalltotal: any;
  totalpayment: any;
  payment: any;
  constructor(
    private serve: ServeService
  ){}
  ngOnInit(): void {
    this.serve.getincome().subscribe((data: any) => {
      console.log(data)
      this.expense = data.expenses;
      this.payment = data.payment;
      this.totalexpense = data.totalexpenses;
      this.totalpayment = data.totalpayment;
      this.overalltotal = data.overalltal;
    })
  }

}
