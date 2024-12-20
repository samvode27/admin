import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patients',
  imports: [CommonModule],
  templateUrl: './patients.component.html',
  styleUrl: './patients.component.css'
})
export class PatientsComponent implements OnInit {
  patients = [
    { id: 1, name: 'John Doe', age: 30, gender: 'Male' },
    { id: 2, name: 'Jane Smith', age: 25, gender: 'Female' },
    { id: 1, name: 'William', age: 26, gender: 'Male' },
    { id: 2, name: 'Maria', age: 45, gender: 'Female' },
    // Add more patients here
  ];

  constructor() {}

  ngOnInit(): void {}
}