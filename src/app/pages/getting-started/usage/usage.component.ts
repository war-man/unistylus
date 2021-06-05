import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usage-page',
  templateUrl: './usage.component.html',
  styleUrls: ['./usage.component.scss']
})
export class UsageComponent implements OnInit {

  scssCodeFull = `// light theme only
@import '~@lamnhan/unistylus/scss/unistylus';
// OR, dark theme only
@import '~@lamnhan/unistylus/scss/unistylus-dark';
// OR, light theme default + dark theme
@import '~@lamnhan/unistylus/scss/unistylus-light-dark';
// OR, dark theme default + light theme
@import '~@lamnhan/unistylus/scss/unistylus-dark-light';
`;

  cssCodeFull = `<!-- light theme only -->
<link rel="stylesheet" href="https://unpkg.com/@lamnhan/unistylus@latest/css/unistylus.css">
<!-- OR, dark theme only -->
<link rel="stylesheet" href="https://unpkg.com/@lamnhan/unistylus@latest/css/unistylus-dark.css">
<!-- OR, light theme default + dark theme -->
<link rel="stylesheet" href="https://unpkg.com/@lamnhan/unistylus@latest/css/unistylus-light-dark.css">
<!-- OR, dark theme default + light theme -->
<link rel="stylesheet" href="https://unpkg.com/@lamnhan/unistylus@latest/css/unistylus-dark-light.css">
`;

  scssCodeMinimal = `// 1. theming (for example, light default + dark)
@import '~@lamnhan/unistylus/scss/themes/light-default';
@import '~@lamnhan/unistylus/scss/themes/dark';

// 2. import all parts
@import '~@lamnhan/unistylus/scss/full';

// OR
// 2. content imports (core.css is required)
@import '~@lamnhan/unistylus/scss/content/reboot';
@import '~@lamnhan/unistylus/scss/content/core';
@import '~@lamnhan/unistylus/scss/content/typography';

// ...
`;

  cssCodeMinimal = `<!-- 1. theming (for example, dark default + light) -->
<link rel="stylesheet" href="https://unpkg.com/@lamnhan/unistylus@latest/css/themes/dark-default.css">
<link rel="stylesheet" href="https://unpkg.com/@lamnhan/unistylus@latest/css/themes/light.css">

<!-- 2. import all parts -->
<link rel="stylesheet" href="https://unpkg.com/@lamnhan/unistylus@latest/css/content/reboot.css">

<!-- OR -->
<!-- 2. content imports (core.css is required) -->
<link rel="stylesheet" href="https://unpkg.com/@lamnhan/unistylus@latest/css/content/reboot.css">
<link rel="stylesheet" href="https://unpkg.com/@lamnhan/unistylus@latest/css/content/core.css">
<link rel="stylesheet" href="https://unpkg.com/@lamnhan/unistylus@latest/css/content/typography.css">

<!-- ... -->
`;

  constructor() { }

  ngOnInit(): void {
  }

}
