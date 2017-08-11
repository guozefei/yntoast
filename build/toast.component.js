import { Component, ElementRef } from '@angular/core';
import * as $ from 'jquery/index';
import { ToastBroadcasterAdapter } from './broadcasterAdapter';
var WidgetToastComponent = (function () {
    /**
     * @param {?} broadcaster
     * @param {?} elementRef
     */
    function WidgetToastComponent(broadcaster, elementRef) {
        this.broadcaster = broadcaster;
        this.elementRef = elementRef;
        this.subscriptions = [];
    }
    /**
     * @return {?}
     */
    WidgetToastComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.el = $(this.elementRef.nativeElement).find('.widget-container');
        // this.broadcaster.on() 目前组件发出的广播是$rootScope
        // 目前页面初始化时会出现一次undefined，
        // 跟 ynMenu 未升级有关
        this.subscriptions.push(this.broadcaster.on('ynote.toast', function (message, theme, undo) {
            _this.message = message;
            _this.theme = theme;
            _this.undo = undo;
            _this.message == undefined ? _this.hide() : _this.popup();
        }));
    };
    /**
     * @return {?}
     */
    WidgetToastComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (sub) {
            sub.unsubscribe();
        });
        this.subscriptions = [];
    };
    /**
     * @return {?}
     */
    WidgetToastComponent.prototype.hide = function () {
        var _this = this;
        if (this.el.is(':visible')) {
            this.el.stop(true, true)
                .fadeOut('slow', function () {
                _this.el.find('p').removeClass(_this.theme);
            });
        }
        this.hideTimeout = undefined;
    };
    /**
     * @return {?}
     */
    WidgetToastComponent.prototype.popup = function () {
        var _this = this;
        this.el.stop(true, true);
        if (this.hideTimeout) {
            clearTimeout(this.hideTimeout);
        }
        this.hideTimeout = setTimeout(function () { return _this.hide(); }, 3000);
        this.el.find('p').attr('class', this.theme);
        setTimeout(function () {
            if (!_this.el.is(':visible')) {
                _this.el.fadeIn('slow');
            }
        });
    };
    return WidgetToastComponent;
}());
export { WidgetToastComponent };
WidgetToastComponent.decorators = [
    { type: Component, args: [{
                selector: 'widget-toast',
                template: "<div class=\"widget-container\"> <div class=\"widget-toast\"> <p> <svg class=\"icon-hint\"> <use class=\"icon-success\" xlink:href=\"icons.svg#file_upload_success\"/> <use class=\"icon-error\" xlink:href=\"icons.svg#file_upload_error\"/> <use class=\"icon-warning\" xlink:href=\"icons.svg#file_upload_warning\"/> </svg> <span class=\"hint-text\" [hidden]=\"!message\">{{message + '！'}}</span> <span class=\"undo\" *ngIf=\"undo && message\" (click)=\"undo()\">撤销</span> </p> </div> </div>"
            },] },
];
/**
 * @nocollapse
 */
WidgetToastComponent.ctorParameters = function () { return [
    { type: ToastBroadcasterAdapter, },
    { type: ElementRef, },
]; };
function WidgetToastComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    WidgetToastComponent.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    WidgetToastComponent.ctorParameters;
    /** @type {?} */
    WidgetToastComponent.prototype.message;
    /** @type {?} */
    WidgetToastComponent.prototype.theme;
    /** @type {?} */
    WidgetToastComponent.prototype.undo;
    /** @type {?} */
    WidgetToastComponent.prototype.el;
    /** @type {?} */
    WidgetToastComponent.prototype.hideTimeout;
    /** @type {?} */
    WidgetToastComponent.prototype.subscriptions;
    /** @type {?} */
    WidgetToastComponent.prototype.broadcaster;
    /** @type {?} */
    WidgetToastComponent.prototype.elementRef;
}
