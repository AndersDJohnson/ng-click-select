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
    var t = event.target;
    if ('selectionStart' in t) {
      (t as any).selectionStart = 0;
      (t as any).selectionEnd = 9999;
    } else {
      (t as any).select();
    }
  }
}


export default ClickSelect;
