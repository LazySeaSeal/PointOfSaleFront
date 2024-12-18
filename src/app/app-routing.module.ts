import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImportEmployeesComponent } from './import-employees/import-employees.component';

const routes: Routes = [
  { path: 'import-employees', component: ImportEmployeesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
