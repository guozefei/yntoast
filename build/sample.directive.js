import { Directive, ElementRef } from '@angular/core';
var SampleDirective = (function () {
    /**
     * @param {?} el
     */
    function SampleDirective(el) {
        this.el = el;
    }
    return SampleDirective;
}());
export { SampleDirective };
SampleDirective.decorators = [
    { type: Directive, args: [{
                selector: '[sampleDirective]'
            },] },
];
/**
 * @nocollapse
 */
SampleDirective.ctorParameters = function () { return [
    { type: ElementRef, },
]; };
function SampleDirective_tsickle_Closure_declarations() {
    /** @type {?} */
    SampleDirective.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    SampleDirective.ctorParameters;
    /** @type {?} */
    SampleDirective.prototype.el;
}
