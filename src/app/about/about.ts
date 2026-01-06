import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {

  aboutHero = {
    title: 'About the Organization',
    subtitle: 'Learn how our leadership is shaping the future of global conferences'
  };

  showGift = false;

  onLearnMore(): void {
    document
      .getElementById('aboutSection')
      ?.scrollIntoView({ behavior: 'smooth' });
  }

  onFreeGift(): void {
    this.showGift = true;
  }
}
