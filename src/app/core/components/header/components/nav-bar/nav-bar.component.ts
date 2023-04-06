import { Component } from '@angular/core';

import { NavBarLink } from './models/nav-bar.models';
import { navBarLinks } from './config/nav-bar.config';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

public navBarLinksElements: NavBarLink[] = navBarLinks;

}
