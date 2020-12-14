# Unistylus

An SCSS theming system.

## Install

```sh
npm install --save @lamnhan/unistylus
```

## Usage

Step 1: Add [`theming.scss`](https://github.com/lamnhan/unistylus/blob/master/theming.scss) file css to your project.

Change the variables to what you want.

Step 2: Import the `theming.scss` in your project into any file.

```scss
@import 'theming.scss'; // path to the theming.scss

// use mixins, functions, ... here
.example {
  color: app-color('primary');
}
```

## License

**@lamnhan/unistylus** is released under the [MIT](https://github.com/lamnhan/unistylus/blob/master/LICENSE) license.
