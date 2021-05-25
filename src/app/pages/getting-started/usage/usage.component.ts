import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usage-page',
  templateUrl: './usage.component.html',
  styleUrls: ['./usage.component.scss']
})
export class UsageComponent implements OnInit {

  scssCodeFull = `// light theme only
@import '~@lamnhan/unistylus/src/scss/unistylus';
// dark theme only
@import '~@lamnhan/unistylus/src/scss/unistylus-dark';
// light theme default + dark theme
@import '~@lamnhan/unistylus/src/scss/unistylus-light-dark';
// dark theme default + light theme
@import '~@lamnhan/unistylus/src/scss/unistylus-dark-light';
`;

  cssCodeFull = `<!-- light theme only -->
<link rel="stylesheet" href="https://unpkg.com/@lamnhan/unistylus@latest/css/unistylus.css">
<!-- dark theme only -->
<link rel="stylesheet" href="https://unpkg.com/@lamnhan/unistylus@latest/css/unistylus-dark.css">
<!-- light theme default + dark theme -->
<link rel="stylesheet" href="https://unpkg.com/@lamnhan/unistylus@latest/css/unistylus-light-dark.css">
<!-- dark theme default + light theme -->
<link rel="stylesheet" href="https://unpkg.com/@lamnhan/unistylus@latest/css/unistylus-dark-light.css">
`;

  scssCodeMinimal = `// theming (for example, light default + dark)
@import '~@lamnhan/unistylus/src/scss/themes/light-default';
@import '~@lamnhan/unistylus/src/scss/themes/dark';

// content imports (core.css is required)
@import '~@lamnhan/unistylus/src/scss/content/reboot';
@import '~@lamnhan/unistylus/src/scss/content/core';
@import '~@lamnhan/unistylus/src/scss/content/typography';

// ...
`;

  cssCodeMinimal = `<!-- theming (for example, dark default + light) -->
<link rel="stylesheet" href="https://unpkg.com/@lamnhan/unistylus@latest/css/themes/dark-default.css">
<link rel="stylesheet" href="https://unpkg.com/@lamnhan/unistylus@latest/css/themes/light.css">

<!-- content imports (core.css is required) -->
<link rel="stylesheet" href="https://unpkg.com/@lamnhan/unistylus@latest/css/content/reboot.css">
<link rel="stylesheet" href="https://unpkg.com/@lamnhan/unistylus@latest/css/content/core.css">
<link rel="stylesheet" href="https://unpkg.com/@lamnhan/unistylus@latest/css/content/typography.css">

<!-- ... -->
`;

  constructor() { }

  ngOnInit(): void {
  }

}
