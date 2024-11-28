import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-patient-appointments',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './patient-appointments.component.html',
  styleUrl: './patient-appointments.component.css'
})
export class PatientAppointmentsComponent {

  upcomingAppointments = [
    { doctor: 'Dr. John Doe', specialty: 'Cardiology', date: '2024-11-15', status: 'Scheduled' },
    { doctor: 'Dr. Jane Smith', specialty: 'Dermatology', date: '2024-11-16', status: 'Scheduled' },
    { doctor: 'Dr. Michael', specialty: 'Neurology', date: '2024-11-17', status: 'Scheduled' },
    { doctor: 'Dr. William', specialty: 'Pediatrics', date: '2024-11-18', status: 'Scheduled' },
  ];

  bookAppointment() {
    
  }


}
