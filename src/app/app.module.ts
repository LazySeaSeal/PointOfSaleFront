import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ImportEmployeesComponent } from './import-employees/import-employees.component';
import { EmployeeService } from './services/employee/employee.service';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    ImportEmployeesComponent,
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }