# Unistylus

An SCSS/CSS theming system.

- [Install & usage](#install-and-usage)
  - [CDN](#cdn)
  - [SCSS](#scss)
- [Why, compared to Bootstrap?](#why-compared-to-bootstrap)
- [Tutorials](#tutorials)
  - [Add new theme](#add-new-theme)
  - [Change theme](#change-theme)
  - [Register & use icons](#register-and-use-icons)
- [Variables](#variables)
- [Mixins](#mixins)

## Install and usage

### CDN

**TO DO**: Support `.min.css` soon.

Include to your html:

`<link rel="stylesheet" href="https://unpkg.com/@lamnhan/unistylus@latest/css/unistylus.css">`

Choose built-in themes:

- [`unistylus.css`](https://unpkg.com/@lamnhan/unistylus@latest/css/unistylus.css): Light theme only
- [`unistylus-light.css`](https://unpkg.com/@lamnhan/unistylus@latest/css/unistylus-light.css): Light theme only
- [`unistylus-dark.css`](https://unpkg.com/@lamnhan/unistylus@latest/css/unistylus-dark.css): Dark theme only
- [`unistylus-light-dark.css`](https://unpkg.com/@lamnhan/unistylus@latest/css/unistylus-light-dark.css): Light theme default + dark theme.
- [`unistylus-dark-light.css`](https://unpkg.com/@lamnhan/unistylus@latest/css/unistylus-dark-light.css): Dark theme default + light theme.

### SCSS

Install using npm:

```sh
npm install --save @lamnhan/unistylus
```

Choose built-in theme:

```scss
@import '~@lamnhan/unistylus/src/scss/unistylus';
```

See usage example: https://github.com/lamnhan/unistylus/blob/main/src/styles.scss

To use minxins:

```scss
@import '~@lamnhan/unistylus/src/mixins';
```

## Why, compared to Bootstrap?

**It's recommended to use Bootstrap in most projects those don't need much customization!**

But if you want to build app that small, clean and have total control or simply don't want to use Bootstrap. You may give Unistylus a try:

- Just standard HTML, CSS (SCSS) & JS (to change theme on the fly).
- Supports multiple themes in app runtime (or in build time).
- No icon font/library; just register whatever icons you need.
- Component can override global theme.
- Supports Angular component in mind.

The disadvantage is it will take more time to build things from scratch.

Another option is to use Bootstrap and Unistylus together.

## Tutorials

### Add new theme

Add this to the global style file (ex.: [styles.scss](https://github.com/lamnhan/unistylus/blob/main/src/styles.scss) for Angular apps);

```scss
[data-theme="theme-name"] {
  // add variables here
}
```

### Change theme

By default, the `default/light` theme is used, to change theme in build time:

```html
<!-- change global theme -->
<body data-theme="theme-name"></body>

<!-- change component theme (override global) -->
<header data-theme="theme-name"></header>
```

Change theme in runtime:

```js
// change theme globally
document.body.setAttribute('data-theme', 'dark');
```

### Register and use icons

- Register icons globally:

See example: https://github.com/lamnhan/unistylus/blob/main/src/scss/app/light.app.component.scss: 

```scss
@include register_app_icons($icon_groups);
```

- Or register component icons:

Register css properties, see example: https://github.com/lamnhan/nguix-starter/blob/main/projects/starter/src/scss/header/light.header.component.scss

```scss
@include register_component_icon_properties($icon_groups, $component_name);
```

Register css rules, see example: https://github.com/lamnhan/nguix-starter/blob/main/projects/starter/src/lib/components/header/header.component.scss

```scss
@include register_component_icon_rules($default_icons, $component_name);
```

- To use registered icons, in component `.html`:

```html
<i class="icon icon-name"></i>
```

## Variables

Fonts:

- `--app-font-head`: heading font, default: **Arial, sans-serif**
- `--app-font-body`: body font, default: **Arial, sans-serif**
- `--app-font-quote`: script & quote font, default: **Times New Roman, cursive**
- `--app-font-code`: code font, default: **Consolas, monospace**

Sizes:

- `--app-size-font`: body font size, default: **16px**
- `--app-size-radius`: radius size, default: **3px**
- `--app-size-border`: border size, default: **1px**
- `--app-size-padding`: **1rem**
- `--app-size-margin`: **1rem**

Colors:

Each supports 3 variants: `contrast`, `shade` and `tint`.

- `--app-color-primary`: primary size, default: **#3880ff**
- `--app-color-secondary`: secondary size, default: **#3dc2ff**
- `--app-color-tertiary`: tertiary size, default: **#5260ff**
- `--app-color-success`: success size, default: **#2dd36f**
- `--app-color-warning`: warning size, default: **#ffc409**
- `--app-color-danger`: danger size, default: **#eb445a**
- `--app-color-dark`: dark size, default: **#222428**
- `--app-color-medium`: medium size, default: **#92949c**
- `--app-color-light`: light size, default: **#f4f5f8**
- `--app-color-background`: background color
- `--app-color-foreground`: foreground color

Gradients:

- `app-gradient-primary`: primary gradient
- ... same for other palettes.

Custom values, you can also add whatever values you need:

- `--app-value-foo`: example property

## Mixins

See: https://github.com/lamnhan/unistylus/blob/main/projects/unistylus/src/scss/mixins

## License

**@lamnhan/unistylus** is released under the [MIT](https://github.com/lamnhan/unistylus/blob/master/LICENSE) license.
