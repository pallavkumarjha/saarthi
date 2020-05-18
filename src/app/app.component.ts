import { Component } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'assignment';
  displayedColumns: string[] = ['name', 'employee', 'department', 'email', 'doj', 'action'];

  employeeData: Employees[] = [];

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const $this = this;
    const dialogRef = this.dialog.open(CreateEmployeeComponent, {
      width: '350px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if(result){
        this.submit(result);
      }
    
      console.log('The dialog was closed');
    });
  }

  submit(result) {
    this.employeeData = [...this.employeeData];
    this.employeeData.push(
      {
        name: `${result.name}`,
        employee: `${result.employee}`,
        department: `${result.department}`,
        email: `${result.email}`,
        doj: `${result.doj}`
      }
    );
  }
  deleteRecord(row) {
    console.log(row);
    this.employeeData = this.employeeData.filter(ele => {
      if(ele.employee != row.employee) {
        return ele;
      }
    });
  }
}

export interface Employees {
  name: string;
  employee: string;
  department: string;
  email: string;
  doj: string;
}

export interface DialogData {
  animal: string;
  name: string;
}
