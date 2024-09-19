import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';

@Component({
  selector: 'app-mainpage',
  standalone: true,
  imports: [RouterModule, CommonModule, NgClass],
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.css'
})
export class MainpageComponent {
  isOpen: boolean = true;

  toggleNav(): void {
    this.isOpen = !this.isOpen;
  }
}
