ng-click-select
===============

***This branch is for Angular 2. For Angular 1.x, see the [1.x branch][1.x].***

Angular directive to select contents of text input or text area elements when clicked.
Useful to allow user to easily copy value into their clipboard without a Flash-based solution like [ZeroClipboard].

[See demo][demo].

Also [available at ngModules.org](http://ngmodules.org/modules/ng-click-select).

## In The Wild
These projects use ng-click-select:
* [SecretStash](https://secretstash.herokuapp.com/)

## Install

Depends on Angular 2.

Via Bower:

```sh
$ bower install --save ng-click-select#2
```

Then include `src/ng-click-select.js` in your page.

And/or add it as a dependency of your module, e.g.:

```js
import NgClickSelect from 'src/ng-click-select';

@Component({
  /* ... */
})
@View({
  template: '<input type="text" ng-click-select />',
  directives: [NgClickSelect]
})
class NgClickSelectExample {
  /* ... */
}
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

## Build

```
npm i
tsd reinstall
npm run tsc
```


[1.x]: https://github.com/AndersDJohnson/ng-click-select/tree/v1.x
[demo]: https://AndersDJohnson.github.io/ng-click-select/example/
[zeroclipboard]: https://github.com/zeroclipboard/zeroclipboard
