import { Routes } from '@angular/router';
import { CustPageComponent } from './cust-page/cust-page.component';
import { CustListComponent } from './cust-list/cust-list.component';
import { CustHistoryComponent } from './cust-history/cust-history.component';

export const CustRoutes: Routes = [
  {path: "custpage", component: CustPageComponent,
    children: [
      {path: "custlist", component: CustListComponent},
      {path: "custhistory", component: CustHistoryComponent},
      {path: "", redirectTo: "custlist", pathMatch: "full"}
    ]
  },
  {path: "", redirectTo: "custpage", pathMatch: "full"}
];
