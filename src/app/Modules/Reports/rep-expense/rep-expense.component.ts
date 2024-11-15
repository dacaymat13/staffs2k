import { Component, OnInit } from '@angular/core';
import { ServeService } from '../../../serve.service';

@Component({
  selector: 'app-rep-expense',
  standalone: true,
  imports: [],
  templateUrl: './rep-expense.component.html',
  styleUrl: './rep-expense.component.css'
})
export class RepExpenseComponent implements OnInit{
  expense: any;
  totalexpense: any;

  constructor(
    private serve: ServeService
  ){}
  ngOnInit(): void {
    this.serve.getincome().subscribe((data: any) => {
      console.log(data)
      this.expense = data.expenses;
      this.totalexpense = data.totalexpenses;
    })
  }



}
