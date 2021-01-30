# Unistylus

An SCSS theming system.

- [Install & usage](#install-usage)
- [Built-in themes](#themes)
- [Variables](#variables)
- [Mixins](#mixins)
- [Tutorials](#tutorials)
  - [Themable Angular component](#themable-angular-component)

## Install & usage

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

## Tutorials

### Themable Angular component

- Step 1: Create a component which is suffixed with `-raw`, including structure (.html) and logic (.ts), ex.: `lib-test-raw`.
- Step 2: Create a separated `.scss` (ex.: `test.style.scss`) file contains styling.
- Step 3: In parent component (ex.: `app-home`), set `encapsulation` to `ViewEncapsulation.None`.
- Step 4: And add styling:

```scss
app-home {

  lib-test-raw {
    @import 'test.style.scss';
  }
}
```

## License

**@lamnhan/unistylus** is released under the [MIT](https://github.com/lamnhan/unistylus/blob/master/LICENSE) license.
