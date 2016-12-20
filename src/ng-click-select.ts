/**
 * Directive for click select behavior.
 */

import {Directive} from '@angular/core';

@Directive({
  host: {
    '(click)': 'click($event)',
  },
  selector: '[ng-click-select], .ng-click-select',
})
class ClickSelect {
  public click(event: Event) {
    const t = <HTMLInputElement|HTMLTextAreaElement> event.target;
    if ('selectionStart' in t) {
      t.selectionStart = 0;
      t.selectionEnd = 9999;
    } else {
      t.select();
    }
  }
}

export default ClickSelect;
