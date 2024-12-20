import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctors',
  imports: [CommonModule],
  templateUrl: './doctors.component.html',
  styleUrl: './doctors.component.css'
})
export class DoctorsComponent implements OnInit {
  doctors = [
    { id: 1, name: 'Dr. Smith', specialization: 'Cardiology', contact: '123-456-789' },
    { id: 2, name: 'Dr. Lee', specialization: 'Neurology', contact: '987-654-321' },
    { id: 1, name: 'Dr. John', specialization: 'Cardiology', contact: '123-456-789' },
    { id: 2, name: 'Dr. William', specialization: 'Neurology', contact: '987-654-321' },
    // Add more doctors here
  ];

  constructor() {}

  ngOnInit(): void {}
}