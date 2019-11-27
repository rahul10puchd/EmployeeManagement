import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SaveEmployeeComponent } from './save-employee/save-employee.component';
import { ShowEmployeeComponent } from './show-employee/show-employee.component';

const routes: Routes = [
  { path : '', component : SaveEmployeeComponent },
  { path : 'employees', component : ShowEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
