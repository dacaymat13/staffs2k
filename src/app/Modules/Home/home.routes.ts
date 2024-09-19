import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ReceivingComponent } from './receiving/receiving.component';
import { ReleaseComponent } from './release/release.component';
import { LaundryDetailsComponent } from './laundry-details/laundry-details.component';
import { HomeMainComponent } from './home-main/home-main.component';

export const HomeRoutes: Routes = [
  {path: "homemain", component: HomeMainComponent,
    children: [
      {path: "homepage", component: HomePageComponent},
      {path: "receive", component: ReceivingComponent},
      {path: "release", component: ReleaseComponent},
      {path: "laundryDetails", component: LaundryDetailsComponent},
      {path: "", redirectTo: "homepage", pathMatch: "full"}
    ]
  },
  {path: "", redirectTo: "homemain", pathMatch: "full"}
];
