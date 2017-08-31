import {
    Component,
    OnInit,
    OnDestroy,
    ElementRef
} from '@angular/core';
import { Subscription } from 'rxjs';
import * as jqueryProxy from 'jquery';
const jquery: JQueryStatic = (<any>jqueryProxy).default || jqueryProxy;

import { ToastBroadcasterAdapter } from './broadcasterAdapter';

@Component({
    selector: 'widget-toast',
    templateUrl: './toast.component.html',
    styleUrls: [
        './toast.css'
    ]
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
        this.el = jquery(this.elementRef.nativeElement).find('.widget-container');
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