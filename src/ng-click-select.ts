/**
 * Directive for click select behavior.
 */

import {Directive} from '@angular/core';


@Directive({
  selector: '[ng-click-select], .ng-click-select',
  host: {
    '(click)': 'click($event)'
  }
})
class ClickSelect {
  click(event:Event) {
    var t = <HTMLInputElement|HTMLTextAreaElement> event.target;
    if ('selectionStart' in t) {
      t.selectionStart = 0;
      t.selectionEnd = 9999;
    } else {
      t.select();
    }
  }
}


export default ClickSelect;
