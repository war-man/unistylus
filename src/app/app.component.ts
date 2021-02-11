import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService, NavService, NavItem } from '@lamnhan/ngx-useful';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  menuItems: NavItem[] = [
    {
      text: 'Getting started',
      level: 0,
    },
      {
        text: 'Introduction',
        level: 1,
        routerLink: ['/getting-started', 'introduction']
      },
      {
        text: 'Install',
        level: 1,
        routerLink: ['/getting-started', 'install']
      },
      {
        text: 'Basic usage',
        level: 1,
        routerLink: ['/getting-started', 'usage']
      },
      {
        text: 'Contribute',
        level: 1,
        routerLink: ['/getting-started', 'contribute']
      },
    {
      text: 'Customize',
      level: 0,
    },
      {
        text: 'Built-in themes',
        level: 1,
        routerLink: ['/customize', 'builtin-themes']
      },
      {
        text: 'Customize a theme',
        level: 1,
        routerLink: ['/customize', 'customize-theme']
      },
      {
        text: 'Add new theme',
        level: 1,
        routerLink: ['/customize', 'add-theme']
      },
    {
      text: 'Content',
      level: 0,
    },
      {
        text: 'Reboot',
        level: 1,
        routerLink: ['/content', 'reboot']
      },
      {
        text: 'Core',
        level: 1,
        routerLink: ['/content', 'core']
      },
      {
        text: 'Typography',
        level: 1,
        routerLink: ['/content', 'typography']
      },
      {
        text: 'Images',
        level: 1,
        routerLink: ['/content', 'images']
      },
      {
        text: 'Tables',
        level: 1,
        routerLink: ['/content', 'tables']
      },
    {
      text: 'Forms',
      level: 0,
    },
      {
        text: 'Form control',
        level: 1,
        routerLink: ['/forms', 'form-control']
      },
    {
      text: 'Components',
      level: 0,
    },
      {
        text: 'Alerts',
        level: 1,
        routerLink: ['/components', 'alerts']
      },
      {
        text: 'Badges',
        level: 1,
        routerLink: ['/components', 'badges']
      },
      {
        text: 'Buttons',
        level: 1,
        routerLink: ['/components', 'buttons']
      },
      {
        text: 'Icons',
        level: 1,
        routerLink: ['/components', 'icons']
      },
    {
      text: 'Utilites',
      level: 0,
    },
      {
        text: 'Spacing',
        level: 1,
        routerLink: ['/utilities', 'spacing']
      },
      {
        text: 'Colors',
        level: 1,
        routerLink: ['/utilities', 'colors']
      },
      {
        text: 'Borders',
        level: 1,
        routerLink: ['/utilities', 'borders']
      },
      {
        text: 'Transitions',
        level: 1,
        routerLink: ['/utilities', 'transitions']
      }
  ];

  constructor(
    private router: Router,
    private appService: AppService,
    private navService: NavService,
  ) {
    this.initialize();
  }

  private initialize() {
    // app service
    this.appService.init({}, {
      title: 'Unistylus',
      description: 'A modern, clean and light weight CSS theming system.',
    });
    // nav service
    this.navService.init(this.router);
  }
}
