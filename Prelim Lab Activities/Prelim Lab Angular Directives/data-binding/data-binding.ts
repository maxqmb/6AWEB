import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-data-binding',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  message = 'Data Binding Demonstration';
  imageUrl = 'https://thumbs.dreamstime.com/b/black-cat-portrait-striking-blue-eyes-dark-moody-style-captivating-black-cat-piercing-blue-eyes-stares-intently-dark-355540717.jpg';
  w = 50;
  h= 50;

  textColor = "blue";
  yourName = '';

  count = 0;
  increment() {
    this.count++;
  }
  decrement() {
    this.count--;
  }

  studentName ="Maxene Quiambao"
  score = 95;

  imageUrl2 = "https://en.kepoper.com/wp-content/uploads/2020/11/blackpink-jennie-profile-1-e1605240841276-758x807.jpg";
  isDisabled = true;

  colSpanValue = 3;
  isPassing = true;

  boxColor ="purple";
  boxSize = "150px";

}
