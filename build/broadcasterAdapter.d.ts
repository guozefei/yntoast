import { Subscription } from 'rxjs';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
export declare class ToastBroadcasterAdapter {
    private _eventBus;
    constructor();
    broadcast(name: string, ...args: any[]): void;
    /**
     * !Importment: 强烈推荐在组件结束生命周期之后取消订阅广播事件
     * You can call the unsubscribe method on the subscription when you want to unsubscribe the Observable
     * e.g.
     * let subscription = broadcaster.on(key, listener);
     * subscription.unsubscribe();
     */
    on(name: any, listener: any): Subscription;
}
