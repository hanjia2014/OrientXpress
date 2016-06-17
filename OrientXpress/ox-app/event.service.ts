import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { Event } from './event';

@Injectable()
export class EventService {
    eventsUrl: string = 'api/events';
    constructor(private http: Http) {
    }
    getEvents(): Observable<Event[]> {

        return this.http.get(this.eventsUrl).map((res: Response) => {
            if (res.status != 200) {
                throw new Error('No objects to retrieve! code status ' + res.status);
            } else {
                return res.json();
            }
        });
    }
}