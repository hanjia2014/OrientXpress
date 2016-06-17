﻿import { Injectable } from '@angular/core';
import {Http, Response, Jsonp} from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { Event } from './event';

@Injectable()
export class EventService {
    eventsUrl: string = 'http://localhost:30712/api/events';
    private events: Event[];
    constructor(private http: Http, private jsonp: Jsonp) {
    }
    getEvents(): Observable<Event[]> {
        return this.jsonp.get(this.eventsUrl).map(request => <Event[]>request.json()[1]);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || {};
    }

    private handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}