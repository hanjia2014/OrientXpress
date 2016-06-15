import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { Event } from './event';

@Injectable()
export class EventService {
    eventsUrl: string = 'http://localhost:30712/api/events';
    private events: Event[];
    constructor(private http: Http) {
    }
    getEvents(): Observable<Event[]> {
        return this.http.get("ox-app/events.json").map(this.extractData).catch(this.handleError);
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