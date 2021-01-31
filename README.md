# Unistylus

An SCSS theming system.

- [Install & usage](#install-and-usage)
- [Built-in themes](#themes)
- [Tutorials](#tutorials)
  - [Add new theme](#add-new-theme)
  - [Create & use icons](#create-and-use-icons)
  - [Themable Angular component](#themable-angular-component)
- [Variables](#variables)
- [Mixins](#mixins)

## Install and usage

```sh
npm install --save @lamnhan/unistylus
```

See usage example: [https://github.com/lamnhan/nguix-starter/blob/main/src/styles.scss](https://github.com/lamnhan/nguix-starter/blob/main/src/styles.scss)

To use minxins:

```scss
@import '~@lamnhan/unistylus/src/mixins.scss';

.button {
  @include button;
}
```

## Themes

- `default`, `light`: The default/light theme.
- `dark`: The dark theme.

## Tutorials

### Add new theme

Add this to the global style file ([styles.scss](https://github.com/lamnhan/nguix-starter/blob/main/src/styles.scss) for Angular apps);

```scss
[data-theme="theme-name"] {
  // add variables here
}
```

### Create and use icons

Icons are grouped by component:

- Create `component_name.data.scss`: see example [`header.data.scss`](https://github.com/lamnhan/nguix-starter/blob/main/projects/starter/src/lib/styles/header/header.data.scss)

- Create `component_name.icon.scss`: see example [`header.icon.scss`](https://github.com/lamnhan/nguix-starter/blob/main/projects/starter/src/lib/styles/header/header.icon.scss)

- Register css rules in `component_name.style.scss`: see example [`header.style.scss`](https://github.com/lamnhan/nguix-starter/blob/main/projects/starter/src/lib/styles/header/header.style.scss#L6)

To use icons, register them in [styles.scss](https://github.com/lamnhan/nguix-starter/blob/main/src/styles.scss#L11). Then, in component `.html`:

```html
<i class="icon icon_name"></i>
```

### Themable Angular component

- Step 1: Create a component which is suffixed with `-raw`, including structure (.html) and logic (.ts), ex.: `lib-test-raw`.
- Step 2: Create a separated `.scss` (ex.: `test.style.scss`) file contains styling.
- Step 3: Create a parent component (ex.: `lib-test`), set `encapsulation` to `ViewEncapsulation.None`.
- Step 4: Add the parent component, with `.html`:

```html
<lib-test-raw></lib-test-raw>
```

- Step 5: Add styling in the parent component:

```scss
lib-test lib-test-raw {
  @import 'test.style.scss';
}
```

- Step 6: Forward all @Input and @Output from the parent to the child.

Then users can use the `<lib-test>` component as normal.

Or users can use `<lib-test-raw>` with their own styling.

## Variables

### Fonts

- `--app-font-head`: heading font, default: **Arial, sans-serif**
- `--app-font-body`: body font, default: **Arial, sans-serif**
- `--app-font-quote`: script & quote font, default: **Times New Roman, cursive**
- `--app-font-code`: code font, default: **Consolas, monospace**

### Sizes

- `--app-size-radius`: radius size, default: **3px**
- `--app-size-border`: border size, default: **1px**

### Colors

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

### Custom values

You can also add whatever values you need.

## Mixins

// TODO

## License

**@lamnhan/unistylus** is released under the [MIT](https://github.com/lamnhan/unistylus/blob/master/LICENSE) license.
