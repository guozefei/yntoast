import { Injectable, Pipe } from '@angular/core';
/**
 * Transforms any input value
 */
var SamplePipe = (function () {
    function SamplePipe() {
    }
    /**
     * @param {?} value
     * @param {?=} args
     * @return {?}
     */
    SamplePipe.prototype.transform = function (value, args) {
        if (args === void 0) { args = null; }
        return value;
    };
    return SamplePipe;
}());
export { SamplePipe };
SamplePipe.decorators = [
    { type: Pipe, args: [{
                name: 'samplePipe'
            },] },
    { type: Injectable },
];
/**
 * @nocollapse
 */
SamplePipe.ctorParameters = function () { return []; };
function SamplePipe_tsickle_Closure_declarations() {
    /** @type {?} */
    SamplePipe.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    SamplePipe.ctorParameters;
}
