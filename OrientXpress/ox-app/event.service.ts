import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { Event } from './event';
@Injectable()
export class EventService {
    eventsUrl: string = '~/api/events';
    constructor(private http: Http, private events: Array<Event>) { }
    getEvents = () => {
        this.events = this.http.get(this.eventsUrl).map((res: any) => res.json()).map((rawEvents: any) => rawEvents.map(Event.create));
        return this.events;
    }
}