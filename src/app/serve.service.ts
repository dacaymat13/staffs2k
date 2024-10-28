import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { data } from 'jquery';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServeService {
  private apiurl = 'http://localhost:8000/api/';
  token = localStorage.getItem('personal_access_token');
  constructor(private http:  HttpClient) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post(this.apiurl + 'login', {email, password})
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('personal_access_token');
  }

  logout(): void{
    localStorage.removeItem('personal_access_token');
  }

  getStaff():Observable<any>{
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`)
    return this.http.get(this.apiurl + "staff", { headers });
  }

  getexpense(): Observable<any>{
    return this.http.get(this.apiurl + 'dispExp');
  }

  addexpense(data: any) {
    return this.http.post(this.apiurl + 'addExp', data);
  }

  uploadStaff(filename: any){
    return this.http.put(`${this.apiurl}upload/${filename.Expense_ID}`, filename); // Adjust path based on your storage structure
  }
  sendValue(value: number) {
    return this.http.post(this.apiurl, { value });
  }

  getincome(): Observable<any>{
    return this.http.get(this.apiurl + 'displayincome');
  }


  //EXPENSES
  getExp(): Observable<any> {
    return this.http.get(this.apiurl + "dispListExp",);
  }
  addExp(data: any): Observable<any> {
    return this.http.post(this.apiurl + "addExp", data);
  }
  uploadExpImg(id: any, expImg: File): Observable<any> {

    const formData = new FormData();
    formData.append('Expense_ID', id);
    formData.append('file', expImg);

    return this.http.post(this.apiurl + "uploadExpImg", formData);
  }
  getExpReceipt(expId: any): Observable<any> {
    return this.http.get(this.apiurl + "getExpReceipt/" + expId);
  }
}
