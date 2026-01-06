import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-partners',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './partners.html',
  styleUrls: ['./partners.css']
})
export class Partners {

  hero = {
    title: 'Our Partners',
    subtitle: 'We collaborate with industry leaders to bring you cutting-edge conferences and events.'
  };

  sponsors = [
    {
      name: 'Microsoft',
      trademark: 'Microsoft™',
      website: 'https://www.microsoft.com',
      logo: '/microsoft.png',
      level: 'Platinum'
    },
    {
      name: 'Apple Inc',
      trademark: 'Apple™',
      website: 'https://www.apple.com',
      logo: '/apple.png',
      level: 'Gold'
    },
    {
      name: 'Amazon',
      trademark: 'Amazon™',
      website: 'https://www.amazon.com',
      logo: '/amazon.png',
      level: 'Silver'
    },
    {
      name: 'Google',
      trademark: 'Google™',
      website: 'https://www.google.com',
      logo: '/google.png',
      level: 'Bronze'
    }
  ];

}
