import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from 'models/interfaces/baseUrl';
import { ImportPossibleFields } from 'models/interfaces/importPossibleFields';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }
  getOptions() {
    const endPointUrl = baseUrl + 'employee/possibleFields';
    return this.http.get<ImportPossibleFields>(endPointUrl);
  }

}
