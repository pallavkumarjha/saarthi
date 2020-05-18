import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {

  createEmployee: FormGroup;
  constructor(  public dialogRef: MatDialogRef<CreateEmployeeComponent>,
    // tslint:disable-next-line:align
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
    this.createEmployee = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      employee: new FormControl(null, [Validators.required]),
      department: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      doj: new FormControl(null, [Validators.required]),
    });
  }

  onSubmit(values) {
    this.dialogRef.close(values);
  }

  resetForm() {
    this.createEmployee.reset();
  }

}

export interface DialogData {
  animal: string;
  name: string;
}
