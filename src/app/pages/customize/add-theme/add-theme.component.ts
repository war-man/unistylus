import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-theme-page',
  templateUrl: './add-theme.component.html',
  styleUrls: ['./add-theme.component.scss']
})
export class AddThemeComponent implements OnInit {

  cssCode = `// new theme name 'foo'
[data-theme="foo"] {
  --app-color-primary: ...;
}
`;

  constructor() { }

  ngOnInit(): void {
  }

}
