import { Routes } from '@angular/router';
import { ExpMainComponent } from './exp-main/exp-main.component';
import { ExpListComponent } from './exp-list/exp-list.component';
import { ExpViewComponent } from './exp-view/exp-view.component';

export const ExpeRoutes: Routes = [
  {path: "expmain", component: ExpMainComponent,
    children: [
      {path: "explist", component: ExpListComponent},
      {path: "expview", component: ExpViewComponent},
      {path: "", redirectTo: "explist", pathMatch: "full"}
    ]
  },
  {path: "", redirectTo: "expmain", pathMatch: "full"}
];
