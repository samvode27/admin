import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appointments',
  imports: [CommonModule],
  templateUrl: './appointments.component.html',
  styleUrl: './appointments.component.css'
})
export class AppointmentsComponent implements OnInit{
  appointments = [
    { id: 1, patientName: 'John Doe', doctorName: 'Dr. Smith', appointmentDate: '2024-12-21', status: 'Pending' },
    { id: 2, patientName: 'Jane Doe', doctorName: 'Dr. Lee', appointmentDate: '2024-12-22', status: 'Confirmed' },
    { id: 3, patientName: 'Michael Johnson', doctorName: 'Dr. Brown', appointmentDate: '2024-12-23', status: 'Cancelled' },
    { id: 4, patientName: 'Emily Davis', doctorName: 'Dr. Wilson', appointmentDate: '2024-12-24', status: 'Pending' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  // Update the status of an appointment
  updateStatus(appointment: any): void {
    const statusOptions = ['Pending', 'Confirmed', 'Cancelled'];
    const currentIndex = statusOptions.indexOf(appointment.status);
    const nextStatus = statusOptions[(currentIndex + 1) % statusOptions.length]; // Loop through status options
    appointment.status = nextStatus;
  }

  // Cancel the appointment
  cancelAppointment(appointment: any): void {
    if (confirm('Are you sure you want to cancel this appointment?')) {
      const index = this.appointments.indexOf(appointment);
      if (index !== -1) {
        this.appointments.splice(index, 1); // Remove the appointment from the list
      }
    }
  }
}
