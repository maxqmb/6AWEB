import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main.html',
  styleUrl: './main.css'
})
export class MainComponent {

  landing = {
    title: 'Research Conferences',
    subtitle: 'Join our global online conferences this 2026'
  };

  countries = [
    {
      name: 'France',
      description: 'A global center for architecture, fine arts, and culture.',
      image: '/france.jpg'
    },
    {
      name: 'Seoul',
      description: 'A hub for humanities, innovation, and digital research.',
      image: '/seoul.jpg'
    },
    {
      name: 'Boston',
      description: 'Known for engineering, technology, and research excellence.',
      image: '/boston.jpg'
    },
    {
      name: 'San Francisco',
      description: 'A leading city for science, startups, and technology.',
      image: '/sanfran.jpg'
    }
  ];

}
