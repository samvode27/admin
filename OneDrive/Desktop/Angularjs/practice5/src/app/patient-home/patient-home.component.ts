import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-patient-home',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './patient-home.component.html',
  styleUrl: './patient-home.component.css'
})
export class PatientHomeComponent {

  specialties = ['Cardiology', 'Dermatology', 'Neurology', 'Orthopedics'];

  topDoctors = [
    { name: 'Dr. John Doe', specialty: 'Cardiology', hospital: 'Hospital A', rating: 4.8 },
    { name: 'Dr. Jane Smith', specialty: 'Dermatology', hospital: 'Hospital B', rating: 4.7 },
    { name: 'Dr. Jane Smith', specialty: 'Dermatology', hospital: 'Hospital B', rating: 4.5 },
    
  ];

  searchQuery = '';
  selectedSpecialty = '';
}
