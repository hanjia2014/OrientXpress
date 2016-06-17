import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { Event } from './event';

@Injectable()
export class EventService {
    eventsUrl: string = 'api/events';
    private events: Event[];
    private error: any;
    constructor(private http: Http) {
    }
    getEvents(): Observable<Event[]> {

        this.http.get(this.eventsUrl).map((res: Response) => {
            if (res.status != 200) {
                throw new Error('No objects to retrieve! code status ' + res.status);
            } else {
                return res.json();
            }
        }).subscribe(
            (data: Event[]) => { return data; },
            (err: any) => this.error = err);
    }
}