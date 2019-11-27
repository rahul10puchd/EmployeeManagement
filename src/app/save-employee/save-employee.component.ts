import { Component, OnInit } from '@angular/core';
import { EmployeeManagementService } from 'src/services/employee-management.service';
import { Employee } from 'src/models/employee';
import {Router} from '@angular/router';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-save-employee',
  templateUrl: './save-employee.component.html',
  styleUrls: ['./save-employee.component.css']
})
export class SaveEmployeeComponent implements OnInit {

  new_employee : Employee = new Employee();

  constructor(private employeeManagementService : EmployeeManagementService,
              private router : Router,
              private messageService: MessageService,
            ) { }

  ngOnInit() {
    // this.new_employee = new Employee();
  }

  saveEmployee(){
    this.employeeManagementService.addEmployee(this.new_employee)
      .subscribe(employee => {
        this.new_employee = new Employee();
        this.notify('success','Success Message','New Employee is successfully added !');
      })
  }

  showEmployee(){
    this.router.navigateByUrl('employees');
  }

  notify(severity_type : string, header : string, msg : string){
    this.messageService.add({severity: severity_type, summary: header, detail: msg});
  }
}
