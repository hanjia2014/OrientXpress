import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Event } from './event';

@Injectable()
export class EventService {
    eventsUrl: string = '~/api/events';
    private events: Event[];
    constructor(private http: Http) {
        this.getEvents();
    }
    //constructor(private http: Http, private events: Event[]) {
    //    this.events = this.http.get(this.eventsUrl).map((res: any) => res.json()).map((rawEvents: any) => rawEvents.map(Event.create));
    //}
    getEvents = () => {
        this.events = this.http.get(this.eventsUrl).map((res: any) => res.json()).map((rawEvents: any) => rawEvents.map(Event.create));
        return this.events;
    }
}