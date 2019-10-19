import {Observable } from 'rxjs';
import { displayLog } from './utils';

export default () => {
    /* Start Coding */
    const hello = Observable.create(function(observer){
        observer.next("Hello");
        setTimeout(() => {
            observer.next("World");
        }, 2000);
    });

    const subscribe = hello.subscribe(res => displayLog(res));
    /* End Coding */
}