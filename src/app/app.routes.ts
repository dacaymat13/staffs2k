import { Routes } from '@angular/router';
import { StaffLoginComponent } from './staff-login/staff-login.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { HomeRoutes } from './Modules/Home/home.routes';
import { ExpeRoutes } from './Modules/Expences/expenses.routes';
import { CustRoutes } from './Modules/Customers/customers.routes';
import { RepRoutes } from './Modules/Reports/reports.routes';

export const routes: Routes = [
  {path: "login", component: StaffLoginComponent},
  {path: "mainpage", component: MainpageComponent,
    children: [
      {
        path: "home",
        loadChildren: () => import('./Modules/Home/home.routes').then(r=>HomeRoutes)
      },
      {
        path: "expenses",
        loadChildren: () => import('./Modules/Expences/expenses.routes').then(r=>ExpeRoutes)
      },
      {
        path: "customers",
        loadChildren: () => import('./Modules/Customers/customers.routes').then(r=>CustRoutes)
      },
      {
        path: "reports",
        loadChildren: () => import('./Modules/Reports/reports.routes').then(r=>RepRoutes)
      },
      {path: "", redirectTo: "home", pathMatch: "full"}
    ]
  },
  {path: "", redirectTo: "login", pathMatch: "full"}
];
