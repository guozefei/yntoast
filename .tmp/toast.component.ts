import {
    Component,
    OnInit,
    OnDestroy,
    ElementRef
} from '@angular/core';
import { Subscription } from 'rxjs';
import * as $ from 'jquery';

import { ToastBroadcasterAdapter } from './broadcasterAdapter';

@Component({
    selector: 'widget-toast',
    template: "<div class=\"widget-container\"> <div class=\"widget-toast\"> <p> <svg class=\"icon-hint\"> <use class=\"icon-success\" xlink:href=\"icons.svg#file_upload_success\"/> <use class=\"icon-error\" xlink:href=\"icons.svg#file_upload_error\"/> <use class=\"icon-warning\" xlink:href=\"icons.svg#file_upload_warning\"/> </svg> <span class=\"hint-text\" [hidden]=\"!message\">{{message + '！'}}</span> <span class=\"undo\" *ngIf=\"undo && message\" (click)=\"undo()\">撤销</span> </p> </div> </div>"
})
export class WidgetToastComponent implements OnInit, OnDestroy {
    public message: string;
    public theme: string;
    public undo: Function;

    private el: any;
    private hideTimeout: any;

    private subscriptions: Array<Subscription> = [];

    public constructor(
        private broadcaster: ToastBroadcasterAdapter,
        private elementRef: ElementRef
    ) { }

    public ngOnInit(): void {
        this.el = $(this.elementRef.nativeElement).find('.widget-container');
        // this.broadcaster.on() 目前组件发出的广播是$rootScope
        // 目前页面初始化时会出现一次undefined，
        // 跟 ynMenu 未升级有关
        this.subscriptions.push(
            this.broadcaster.on('ynote.toast', (message: string, theme: string, undo: Function): void => {
                this.message = message;
                this.theme = theme;
                this.undo = undo;
                this.message == undefined ? this.hide() : this.popup();
            })
        );
    }

    public ngOnDestroy(): void {
        this.subscriptions.forEach((sub: Subscription): void => {
            sub.unsubscribe();
        });
        this.subscriptions = [];
    }

    private hide(): void {
        if (this.el.is(':visible')) {
            this.el.stop(true, true)
                .fadeOut('slow', (): void => {
                    this.el.find('p').removeClass(this.theme);
                });
        }
        this.hideTimeout = undefined;
    }

    private popup() {
        this.el.stop(true, true);
        if (this.hideTimeout) {
            clearTimeout(this.hideTimeout);
        }
        this.hideTimeout = setTimeout((): void => this.hide(), 3000);
        this.el.find('p').attr('class', this.theme);
        setTimeout((): void => {
            if (!this.el.is(':visible')) {
                this.el.fadeIn('slow');
            }
        });
    }
}