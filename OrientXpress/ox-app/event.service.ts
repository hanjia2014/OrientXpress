import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { Event } from './event';

@Injectable()
export class EventService {
    eventsUrl: string = '~/api/events';
    constructor() {
     
    }
    //constructor(private http: Http, private events: Event[]) {
    //    this.events = this.http.get(this.eventsUrl).map((res: any) => res.json()).map((rawEvents: any) => rawEvents.map(Event.create));
    //}
    //getEvents = () => {
    //    this.events = this.http.get(this.eventsUrl).map((res: any) => res.json()).map((rawEvents: any) => rawEvents.map(Event.create));
    //    return this.events;
    //}
}