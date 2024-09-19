import { Routes } from '@angular/router';
import { RepMainComponent } from './rep-main/rep-main.component';
import { RepPageComponent } from './rep-page/rep-page.component';
import { RepIncomeComponent } from './rep-income/rep-income.component';
import { RepExpenseComponent } from './rep-expense/rep-expense.component';
import { RepRemitanceComponent } from './rep-remitance/rep-remitance.component';

export const RepRoutes: Routes = [
  {path: "repMain", component: RepMainComponent,
    children: [
      {path: "repPage", component: RepPageComponent},
      {path: "repIncome", component: RepIncomeComponent},
      {path: "repExpense", component: RepExpenseComponent},
      {path: "repRemitance", component: RepRemitanceComponent},
      {path: "", redirectTo: "repPage", pathMatch: "full"}
    ]
  },
  {path: "", redirectTo: "repMain", pathMatch: "full"},
];
