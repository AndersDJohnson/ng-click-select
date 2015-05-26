ng-click-select
===============

Angular directive to select contents of text input when clicked.
Useful to allow user to easily copy value into their clipboard.

[See demo.](https://rawgithub.com/AndersDJohnson/ng-click-select/v1.x/index.html)


Also [available at ngModules.org](http://ngmodules.org/modules/ng-click-select).

## Install

Depends on Angular.

Via Bower:

```sh
$ bower install --save ng-click-select
```

Then include `ng-click-select.js` in your page.

And add it as a dependency of your module, e.g.:

```js
var myApp = angular.module('myApp', ['ngClickSelect']);
```

## Examples

### Inputs

```html
<input type="text" ng-click-select />
```

### Textareas

```html
<textarea class="ng-click-select"></textarea>
```
