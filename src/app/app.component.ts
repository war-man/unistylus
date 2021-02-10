import { Component } from '@angular/core';
import { NavItem } from '@lamnhan/ngx-useful';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  mobileMenuExpanded = false;

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
        text: 'Icons',
        level: 1,
        routerLink: ['/getting-started', 'icons']
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
        text: 'Badge',
        level: 1,
        routerLink: ['/components', 'adge']
      },
      {
        text: 'Buttons',
        level: 1,
        routerLink: ['/components', 'buttons']
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

  constructor() {}

  selectTheme(e: unknown) {
    const themeName = (e as any).target.value;
    return document.body.setAttribute('data-theme', themeName);
  }

}
