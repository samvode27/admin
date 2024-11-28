import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-patient-blog',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './patient-blog.component.html',
  styleUrl: './patient-blog.component.css'
})
export class PatientBlogComponent {

  blogs = [
    { title: 'Heart Health Tips', author: 'Dr. John Doe', date: '2024-11-01', content: 'Here are some tips for maintaining a healthy heart.' },
    { title: 'Skin Care Tips', author: 'Dr. Jane Smith', date: '2024-10-20', content: 'Learn how to keep your skin healthy and glowing.' },
  ];

  comment = '';
  addComment(blog: any) {
    console.log(`Adding comment: ${this.comment}`);
  }


}
