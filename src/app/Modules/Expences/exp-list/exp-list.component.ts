import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exp-list',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './exp-list.component.html',
  styleUrl: './exp-list.component.css'
})
export class ExpListComponent implements OnInit{
  today: any;

  constructor(

  ){
    this.today = ''; // Initialize today
  }

  ngOnInit(): void {
    const date = new Date();
    this.today = date.toISOString().split('T')[0];
  }

}
