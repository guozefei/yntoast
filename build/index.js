import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleComponent } from './sample.component';
import { SampleDirective } from './sample.directive';
import { SamplePipe } from './sample.pipe';
import { SampleService } from './sample.service';
import { WidgetToastComponent } from './toast.component';
import { ToastBroadcasterAdapter } from './broadcasterAdapter';
// import * as $ from 'jquery';
export { SampleComponent } from './sample.component';
export { SampleDirective } from './sample.directive';
export { SamplePipe } from './sample.pipe';
export { SampleService } from './sample.service';
export { WidgetToastComponent } from './toast.component';
export { ToastBroadcasterAdapter } from './broadcasterAdapter';
var ToastModule = (function () {
    function ToastModule() {
    }
    /**
     * @return {?}
     */
    ToastModule.forRoot = function () {
        return {
            ngModule: ToastModule,
            // providers: [SampleService]
            providers: [SampleService, ToastBroadcasterAdapter]
        };
    };
    return ToastModule;
}());
export { ToastModule };
ToastModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [
                    SampleComponent,
                    SampleDirective,
                    SamplePipe,
                    WidgetToastComponent
                ],
                exports: [
                    SampleComponent,
                    SampleDirective,
                    SamplePipe
                ]
            },] },
];
/**
 * @nocollapse
 */
ToastModule.ctorParameters = function () { return []; };
function ToastModule_tsickle_Closure_declarations() {
    /** @type {?} */
    ToastModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ToastModule.ctorParameters;
}
