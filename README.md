# Unistylus

An SCSS theming system.

## Install

```sh
npm install --save @lamnhan/unistylus
```

## Usage

Step 1: Add [`theming.scss`](https://github.com/lamnhan/unistylus/blob/master/theming.scss) file to your project.

Change the variables to whatever you want.

Step 2: Import the `theming.scss` in your project into any SASS file.

```scss
@import 'theming.scss'; // path to the theming.scss

// use mixins, functions, ... here
.example {
  color: app-color('primary');
}
```

## Themable Angular component

- Step 1: Create a component which is suffixed with `-raw`, including structure (.html) and logic (.ts), ex.: `lib-test-raw`.
- Step 2: Create a separated `.scss` (ex.: `test.style.scss`) file contains a mixin named `lib-test-style` including component styling.
- Step 3: In parent component (ex.: `app-home`), set `encapsulation` to `ViewEncapsulation.None`. And add styling:

```scss
@import 'theming.scss';
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
- [List of functions](#functions)

### Variables

#### $fonts

A map of fonts.

Usage: `map-get($fonts, 'head')` or [`app-font('head')`](#app-font).

- `head`: heading font, default: **Poppins, sans-serif**
- `body`: body font, default: **Roboto, sans-serif**
- `quote`: script & quote font, default: **'Charmonman, cursive**
- `code`: code font, default: **Source Code Pro, monospace**

#### $sizes

A map of sizes.

Usage: `map-get($sizes, 'base')` or [`app-size('base')`](#app-size).

- `base`: base size, default: **16px**
- `radius`: radius size, default: **7px**
- `border`: border size, default: **1px**

#### $colors

A map of colors.

Usage: `map-get($colors, 'primary')` or [`app-color('primary')`](#app-color).

- `primary`: primary size, default: **#3880ff**
- `secondary`: secondary size, default: **#3dc2ff**
- `tertiary/info`: tertiary/info size, default: **#5260ff**
- `success`: success size, default: **#2dd36f**
- `warning`: warning size, default: **#ffc409**
- `danger`: danger size, default: **#eb445a**
- `dark`: dark size, default: **#222428**
- `medium/muted`: medium/muted size, default: **#92949c**
- `light`: light size, default: **#f4f5f8**

#### $gradients

A map of gradients.

Usage: `map-get($gradients, 'primary')` or [`app-gradient('primary')`](#app-gradient).

- `primary`: primary size, default: **linear normal/darken**
- `secondary`: secondary size, default: **linear normal/darken**
- `tertiary/info`: tertiary/info size, default: **linear normal/darken**
- `success`: success size, default: **linear normal/darken**
- `warning`: warning size, default: **linear normal/darken**
- `danger`: danger size, default: **linear normal/darken**
- `dark`: dark size, default: **linear normal/darken**
- `medium/muted`: medium/muted size, default: **linear normal/darken**
- `light`: light size, default: **linear normal/darken**

#### $values

A map of custom variables.

Usage: `map-get($values, 'foo')` or [`app-value('foo')`](#app-value).

- `foo`: a placeholder, add your key/vale

### Functions

#### app-font()

Usage: `app-font(...)`.

Parameters:

- `$fonts`: the [**$fonts**](#fonts) map

#### app-size()

Usage: `app-size(...)`.

Parameters:

- `$sizes`: the [**$sizes**](#sizes) map

#### app-color()

Usage: `app-color(...)`.

Parameters:

- `$colors`: the [**$colors**](#colors) map
- `$variant`: the variant of the base color
  - *base* (default): no modification
  - *shade*: 30% darker
  - *tint*: 30% lighter
  - *contrast*: get the dark/light color (contrast of the base color)
#### app-gradient()

Usage: `app-gradient(...)`.

Parameters:

- `$gradients`: the [**$gradients**](#gradients) map

#### app-value()

Usage: `app-value(...)`.

Parameters:

- `$values`: the [**$values**](#values) map

### Mixins

#### border($key)

#### max-width($width)

#### truncate($width)

#### ...

## License

**@lamnhan/unistylus** is released under the [MIT](https://github.com/lamnhan/unistylus/blob/master/LICENSE) license.
