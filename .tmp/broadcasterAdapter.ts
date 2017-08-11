import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import * as _ from 'underscore';

interface BroadcastEvent {
    key: string;
    data?: any;
}

function _toConsumableArray(arr) {
    if (_.isArray(arr)) {
        let i, arr2;
        for (i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
            arr2[i] = arr[i];
        }
        return arr2;
    } else {
        return _.toArray(arr);
    }
}

@Injectable()
export class ToastBroadcasterAdapter {
    private _eventBus: Subject<BroadcastEvent>;
    constructor() {
        this._eventBus = new Subject<BroadcastEvent>();
    }

    broadcast(name: string, ...args) {
        this._eventBus.next({
            key: name,
            data: args
        });
    }

    /**
     * !Importment: 强烈推荐在组件结束生命周期之后取消订阅广播事件
     * You can call the unsubscribe method on the subscription when you want to unsubscribe the Observable
     * e.g. 
     * let subscription = broadcaster.on(key, listener);
     * subscription.unsubscribe();
     */
    on(name, listener) {
        return this._eventBus.asObservable()
            .filter(event => event.key === name)
            .map(event => event.data)
            .subscribe((data) => {
                listener.apply(undefined, _toConsumableArray(data));
            });
    }
}