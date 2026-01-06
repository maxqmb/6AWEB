import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-join-us',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './join-us.html',
  styleUrl: './join-us.css'
})
export class JoinUs {

  firstName = '';
  lastName = '';
  email = '';
  institution = '';
  academicInstitution = '';

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  onJoin(): void {
    alert('You have successfully joined our mailing list!');
  }
}
