import { Component } from '@angular/core';
import { ReleaseComponent } from '../release/release.component';
import { ReceivingComponent } from '../receiving/receiving.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ReleaseComponent, ReceivingComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
