import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
saveStudent(studForm: NgForm): void{
  console.log(studForm.value);
}
}
