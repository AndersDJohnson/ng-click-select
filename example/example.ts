/// <reference path="../typings/angular2/angular2.d.ts" />
/**
 * Example of click select.
 */

import {Component, View, bootstrap} from 'angular2/angular2';
import NgClickSelect from "../src/ng-click-select";


@Component({
  selector: 'ng-click-select-example',
})
@View({
  templateUrl: 'example.html',
  directives: [NgClickSelect]
})
class NgClickSelectExample {}


bootstrap(NgClickSelectExample);


export default NgClickSelectExample;
