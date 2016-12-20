/**
 * Example of click select.
 */

// polyfills
import 'core-js/client/shim.min.js';
import 'zone.js/dist/zone.js';
import 'reflect-metadata';

import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import NgClickSelect from "../src/ng-click-select";


@Component({
  selector: 'ng-click-select-example',
  templateUrl: 'example.html',
})
class NgClickSelectExampleComponent {}


@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ NgClickSelectExampleComponent, NgClickSelect ],
  bootstrap:    [ NgClickSelectExampleComponent ]
})
class NgClickSelectExampleApp {}


platformBrowserDynamic().bootstrapModule(NgClickSelectExampleApp);
