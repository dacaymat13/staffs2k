import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServeService } from '../../../serve.service';
import { RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { error } from 'jquery';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-exp-list',
  standalone: true,
  imports: [RouterModule, RouterOutlet, FormsModule, ReactiveFormsModule, CommonModule, RouterLinkActive, FormsModule],
  templateUrl: './exp-list.component.html',
  styleUrl: './exp-list.component.css'
})
export class ExpListComponent implements OnInit{
  today: any = '';
  currentDateTime: any = '';
  expId: any;
  expense: any[] = [];
  filteredExpense: any[] = [];
  selectedFile: File| null=null;
  imagePreview: string | ArrayBuffer | null = '';
  intervalId: any;
  expDet: any;


  constructor(
    private staffservice: ServeService
  ){
    this.today = '';
    this.currentDateTime = '';
  }

  ngOnInit(): void {
    const date = new Date();
    this.today = date.toISOString().split('T')[0];
    const current = new Date();
    this.currentDateTime = current.toISOString().substring(0, 19);

    this.displayExp();
  }

  staffId: any;

  addExpense = new FormGroup({
    Admin_ID: new FormControl("2"),
    Amount: new FormControl(),
    Desc_reason: new FormControl(),
    Receipt_filenameimg: new FormControl(),
    Datetime_taken: new FormControl(this.today)
  });



  displayExp(){
    this.staffservice.getExp().subscribe(
      (response) => {

        if (Array.isArray(response)) {
          this.expense = response;



          this.filteredExpense = [...this.expense];
          console.log(this.filteredExpense[13].Receipt_filenameimg);

      } else {
          console.error('API response is not an array', response);
      }
      }
    )
  }

  onFileSelected(event: any) {
    console.log(event)
    const imgfile = event.target.files[0];
    if (imgfile){
      this.selectedFile = imgfile;
      console.log(this.selectedFile);
      this.previewImage();
    }
  }

  previewImage(): void{
    if (this.selectedFile){
      const reader = new FileReader();
      reader.onload = () =>{
        this.imagePreview = reader.result;
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }


  addExp(){
    console.log(this.addExpense.value);
    // this.addExpense.value.Admin_ID = localStorage.getItem('staffID');
    // console.log(this.addExpense.value.Admin_ID);
    // this.addExpense.value.Datetime_taken = this.currentDateTime;
    this.staffservice.addExp(this.addExpense.value).subscribe(
      (response) => {
        console.log('Expense added successfully:', response);
        console.log();
        this.expId = response.Expense.Expense_ID;
        this.onUpload(this.expId);
        this.displayExp();
        this.addExpense.reset();
        this.selectedFile = null;
        this.imagePreview = null;
      },
      (error) => {
        console.error('Error adding staff:', error);
            Swal.fire(
              'Error!',
              'There was an issue adding the staff. Please try again.',
              'error'
            );
      }
    );
  }


  onUpload(expId: any){


    if (this.selectedFile){
      console.log(expId)

      this.staffservice.uploadExpImg(expId, this.selectedFile).subscribe(
        (response) => {
          console.log('Receipt Image Upload Successfully:', response);
        },
        (error) => {
          console.log('Error uploading image:', error);
          alert('Error uploading image');
        }
      );
    }else{
      alert('NO file selected.')
    }
  }

  loadExistingImage() {
    throw new Error('Method not implemented.');
  }

  ngOnDestroy(){
    clearInterval(this.intervalId);
  }

  dispExpReceipt(expId: any){
    this.staffservice.getExpReceipt(expId).subscribe(
      (response) => {
        this.expDet = response[0];
        console.log(this.expDet);
      }
    )
  }


  onDateChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.today = input.value ? input.value : null; // Capture the selected date
    this.filterExpense(); // Call the filter method
  }

  filterExpense(): void{

    if (this.today) {
      const selected = new Date(this.today).toISOString().split('T')[0];
      console.log('Selected Date:', selected);

      this.filteredExpense = this.expense.filter(expense => {
        const expenseDate = new Date(expense.Datetime_taken);
        const expenseDateString = expenseDate.toISOString().split('T')[0];

        console.log('Expense Date:', expenseDateString);
        const isMatch = expenseDateString === selected;

        console.log('Date Match:', isMatch);
        return isMatch;
      });
    }
  }

  populateUpdateForm(expense: any) {
    this.addExpense.patchValue({
      Amount: expense.Amount,
      Desc_reason: expense.Desc_reason,
      
    });
    this.imagePreview = `http://localhost:8000/storage/${expense.Receipt_filenameimg}`;

  }

   


}
