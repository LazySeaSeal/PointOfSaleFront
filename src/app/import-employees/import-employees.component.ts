import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee/employee.service';
import { Option } from 'libs/matchy/src/models/classes/option';
import { ImportPossibleFields } from 'models/interfaces/importPossibleFields';
import { Matchy } from 'libs/matchy/src/main';

@Component({
  selector: 'app-import-employees',
  templateUrl: './import-employees.component.html',
  styleUrls: ['./import-employees.component.css']
})
export class ImportEmployeesComponent implements OnInit {
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    console.log('ngOnInit called');
    this.loadMatchyLib();
  }
  loadMatchyLib() {
    this.employeeService.getOptions().subscribe((data: ImportPossibleFields) => {
      console.log('Received data:', data);
      const matchy = new Matchy(data.possible_fields);
      document.getElementById("matchy")?.appendChild(matchy);
    });
  }


}
