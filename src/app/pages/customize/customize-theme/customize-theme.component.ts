import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customize-theme-page',
  templateUrl: './customize-theme.component.html',
  styleUrls: ['./customize-theme.component.scss']
})
export class CustomizeThemeComponent implements OnInit {

  cssCode = `// customize the light theme (the default)
:root, [data-theme="default"], [data-theme="light"] {
  --app-color-primary: ...;
}
`;

  constructor() { }

  ngOnInit(): void {
  }

}
