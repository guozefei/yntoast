import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import * as _ from 'underscore/index';
/**
 * @param {?} arr
 * @return {?}
 */
function _toConsumableArray(arr) {
    if (_.isArray(arr)) {
        var /** @type {?} */ i = void 0, /** @type {?} */ arr2 = void 0;
        for (i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
            arr2[i] = arr[i];
        }
        return arr2;
    }
    else {
        return _.toArray(arr);
    }
}
var ToastBroadcasterAdapter = (function () {
    function ToastBroadcasterAdapter() {
        this._eventBus = new Subject();
    }
    /**
     * @param {?} name
     * @param {...?} args
     * @return {?}
     */
    ToastBroadcasterAdapter.prototype.broadcast = function (name) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        this._eventBus.next({
            key: name,
            data: args
        });
    };
    /**
     * !Importment: 强烈推荐在组件结束生命周期之后取消订阅广播事件
     * You can call the unsubscribe method on the subscription when you want to unsubscribe the Observable
     * e.g.
     * let subscription = broadcaster.on(key, listener);
     * subscription.unsubscribe();
     * @param {?} name
     * @param {?} listener
     * @return {?}
     */
    ToastBroadcasterAdapter.prototype.on = function (name, listener) {
        return this._eventBus.asObservable()
            .filter(function (event) { return event.key === name; })
            .map(function (event) { return event.data; })
            .subscribe(function (data) {
            listener.apply(undefined, _toConsumableArray(data));
        });
    };
    return ToastBroadcasterAdapter;
}());
export { ToastBroadcasterAdapter };
ToastBroadcasterAdapter.decorators = [
    { type: Injectable },
];
/**
 * @nocollapse
 */
ToastBroadcasterAdapter.ctorParameters = function () { return []; };
function ToastBroadcasterAdapter_tsickle_Closure_declarations() {
    /** @type {?} */
    ToastBroadcasterAdapter.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ToastBroadcasterAdapter.ctorParameters;
    /** @type {?} */
    ToastBroadcasterAdapter.prototype._eventBus;
}
