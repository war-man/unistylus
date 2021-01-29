# Unistylus

An SCSS theming system.

## Install

```sh
npm install --save @lamnhan/unistylus
```

## Usage

Step 1: Add [`themes.scss`](https://github.com/lamnhan/unistylus/blob/master/src/themes.scss) file to your project. Then, change the variables to whatever you want.

```scss
// all themes
@import '~@lamnhan/unistylus/src/themes.scss';

// default/light
// @import '~@lamnhan/unistylus/src/themes/default.scss';

// dark
// @import '~@lamnhan/unistylus/src/themes/dark.scss';
```

Step 2: Using variables.

```scss
body {
  color: var(--app-color-primary);
}
```

Step 3: (optional) To use mixins, import the `mixins` file.

```scss
@import '~@lamnhan/unistylus/src/mixins.scss';

.example {
  @include border;
}
```

## Themable Angular component

- Step 1: Create a component which is suffixed with `-raw`, including structure (.html) and logic (.ts), ex.: `lib-test-raw`.
- Step 2: Create a separated `.scss` (ex.: `test.style.scss`) file contains a mixin named `lib-test-style` including component styling.
- Step 3: In parent component (ex.: `app-home`), set `encapsulation` to `ViewEncapsulation.None`. And add styling:

```scss
@import 'test.style.scss';

app-home {

  lib-test-raw {
    @include lib-test-style;
  }
}
```

## The big list

- [List of variables](#variables)
- [List of mixins](#mixins)

### Variables

#### Fonts

- `--app-font-head`: heading font, default: **Arial, sans-serif**
- `--app-font-body`: body font, default: **Arial, sans-serif**
- `--app-font-quote`: script & quote font, default: **Times New Roman, cursive**
- `--app-font-code`: code font, default: **Consolas, monospace**

#### Sizes

- `--app-size-base`: base size, default: **16px**
- `--app-size-radius`: radius size, default: **3px**
- `--app-size-border`: border size, default: **1px**

#### Colors

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

#### Custom values

You can also add whatever values you need.

### Mixins

// TODO

## License

**@lamnhan/unistylus** is released under the [MIT](https://github.com/lamnhan/unistylus/blob/master/LICENSE) license.
