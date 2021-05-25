import { Component } from '@angular/core';
import { LocalstorageService, AppService, MetaService, NavService, NavItem, SettingService } from '@lamnhan/ngx-useful';

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
        routerLink: ['getting-started', 'introduction']
      },
      {
        text: 'Install',
        level: 1,
        routerLink: ['getting-started', 'install']
      },
      {
        text: 'Basic usage',
        level: 1,
        routerLink: ['getting-started', 'usage']
      },
      {
        text: 'Contribute',
        level: 1,
        routerLink: ['getting-started', 'contribute']
      },
    {
      text: 'Customize',
      level: 0,
    },
      {
        text: 'Built-in themes',
        level: 1,
        routerLink: ['customize', 'builtin-themes']
      },
      {
        text: 'Customize a theme',
        level: 1,
        routerLink: ['customize', 'customize-theme']
      },
      {
        text: 'Add new theme',
        level: 1,
        routerLink: ['customize', 'add-theme']
      },
    {
      text: 'Content',
      level: 0,
    },
      {
        text: 'Reboot',
        level: 1,
        routerLink: ['content', 'reboot']
      },
      {
        text: 'Core',
        level: 1,
        routerLink: ['content', 'core']
      },
      {
        text: 'Typography',
        level: 1,
        routerLink: ['content', 'typography']
      },
      {
        text: 'Images',
        level: 1,
        routerLink: ['content', 'images']
      },
      {
        text: 'Tables',
        level: 1,
        routerLink: ['content', 'tables']
      },
    {
      text: 'Forms',
      level: 0,
    },
      {
        text: 'Controls',
        level: 1,
        routerLink: ['forms', 'form-controls']
      },
      {
        text: 'Switch',
        level: 1,
        routerLink: ['forms', 'form-switch']
      },
      {
        text: 'Select',
        level: 1,
        routerLink: ['forms', 'form-select']
      },
      {
        text: 'Range',
        level: 1,
        routerLink: ['forms', 'form-range']
      },
      {
        text: 'Check',
        level: 1,
        routerLink: ['forms', 'form-check']
      },
    {
      text: 'Components',
      level: 0,
    },
      {
        text: 'Alerts',
        level: 1,
        routerLink: ['components', 'alerts']
      },
      {
        text: 'Badges',
        level: 1,
        routerLink: ['components', 'badges']
      },
      {
        text: 'Buttons',
        level: 1,
        routerLink: ['components', 'buttons']
      },
      {
        text: 'List',
        level: 1,
        routerLink: ['components', 'list']
      },
      {
        text: 'Card',
        level: 1,
        routerLink: ['components', 'card']
      },
      {
        text: 'Icons',
        level: 1,
        routerLink: ['components', 'icons']
      },
    {
      text: 'Utilites',
      level: 0,
    },
      {
        text: 'Spacing',
        level: 1,
        routerLink: ['utilities', 'spacing']
      },
      {
        text: 'Background',
        level: 1,
        routerLink: ['utilities', 'background']
      },
      {
        text: 'Colors',
        level: 1,
        routerLink: ['utilities', 'colors']
      },
      {
        text: 'Borders',
        level: 1,
        routerLink: ['utilities', 'borders']
      },
      {
        text: 'Transitions',
        level: 1,
        routerLink: ['utilities', 'transitions']
      },
      {
        text: 'Truncate',
        level: 1,
        routerLink: ['utilities', 'truncate']
      }
  ];

  constructor(
    private localstorageService: LocalstorageService,
    private appService: AppService,
    private metaService: MetaService,
    private navService: NavService,
    private settingService: SettingService,
  ) {
    this.initialize();
  }

  private initialize() {
    this.localstorageService.init();
    this.appService.init({ splashScreen: true });
    this.settingService.init(
      {
        browserColor: true,
        onReady: () => this.appService.hideSplashScreen(),
      },
      {},
      {
        localstorageService: this.localstorageService,
      },
    );
    this.navService.init(
      {},
      { settingService: this.settingService },
    );
    this.metaService.init(
      {
        title: 'Unistylus',
        description: 'A modern, clean and light weight CSS theming system.',
        image: 'https://unistylus.lamnhan.com/assets/images/featured.jpg',
        url: 'https://unistylus.lamnhan.com/',
        lang: 'en',
        ogLocale: 'en-US',
        ogSiteName: 'Unistylus'
      },
      {},
      { settingService: this.settingService },
    );
  }
}
