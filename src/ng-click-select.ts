/// <reference path="../typings/angular2/angular2.d.ts" />
/**
 * Directive for click select behavior.
 */

import {Directive} from 'angular2/angular2';


@Directive({
  selector: '[ng-click-select], .ng-click-select',
  hostListeners: {
    click: 'click($event)'
  }
})
class ClickSelect {
  click(e) {
    var t = e.target;
    if ('selectionStart' in t) {
      t.selectionStart = 0;
      t.selectionEnd = 9999;
    } else {
      t.select();
    }
  }
}


export default ClickSelect;
