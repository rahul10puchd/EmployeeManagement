import { Component, OnInit, ViewChild, AfterViewChecked } from '@angular/core';
import { EmployeeManagementService } from 'src/services/employee-management.service';
import { Employee } from 'src/models/employee';
import { Table } from 'primeng/table';
import {Location} from '@angular/common';

@Component({
  selector: 'app-show-employee',
  templateUrl: './show-employee.component.html',
  styleUrls: ['./show-employee.component.css']
})
export class ShowEmployeeComponent implements OnInit, AfterViewChecked {

  @ViewChild('empTable', {static: false}) private _empTable: Table;

  employees : Employee[];
  dateFilters: any;

  cols = [
    { field : 'employee_id', header : 'Employee ID' },
    { field : 'first_name', header : 'First Name'},
    { field : 'last_name', header : 'Last Name' },
    { field : 'department', header : 'Department'},
    { field : 'dob', header : 'Date Of Birth'},
    { field : 'mobile', header : 'Mobile'},
    { field : 'address', header : 'Address'}
  ];

  constructor(private employeeManagementService : EmployeeManagementService,
              private _location : Location) { }

  ngOnInit() {
    this.getEmployees();
  }

  ngAfterViewChecked(){
    // this will be called from templates onSelect event

    if(this._empTable != undefined)
    {
      const customFilterConstraints = this._empTable.filterConstraints;
      customFilterConstraints['between'] = this.dateRangeFilter;
      this._empTable.filterConstraints = customFilterConstraints;
    }
    
  }

  dateRangeFilter(value: Date, filter:Date[]): boolean {
    // get the from/start value
    value = new Date(value);
    
    var s = filter[0].getTime();
    var e;
    
    // the to/end value might not be set
    // use the from/start date and add 1 dayx
    // or use the to/end date and add 1 day
    if ( filter[1]) {
      e =  filter[1].getTime() + 86400000;
    } else {
      e = s + 86400000;
    }
    // compare it to the actual values
    return (value.getTime() >= s && value.getTime() <= e);
  }

  getEmployees(){
    this.employeeManagementService.getEmployees()
      .subscribe(employees => {
        this.employees = employees as Employee[];
      })
  }

  goToPreviousPage(){
    this._location.back();
  }

}
