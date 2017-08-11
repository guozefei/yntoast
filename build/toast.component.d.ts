import { OnInit, OnDestroy, ElementRef } from '@angular/core';
import { ToastBroadcasterAdapter } from './broadcasterAdapter';
export declare class WidgetToastComponent implements OnInit, OnDestroy {
    private broadcaster;
    private elementRef;
    message: string;
    theme: string;
    undo: Function;
    private el;
    private hideTimeout;
    private subscriptions;
    constructor(broadcaster: ToastBroadcasterAdapter, elementRef: ElementRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    private hide();
    private popup();
}
