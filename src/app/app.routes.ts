import { Routes } from '@angular/router';
import { MainComponent } from './main/main';
import { Partners } from './partners/partners';
import { About } from './about/about';
import { JoinUs } from './join-us/join-us';

export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'partners', component: Partners },
  { path: 'about', component: About },
  { path: 'join-us', component: JoinUs },
];
