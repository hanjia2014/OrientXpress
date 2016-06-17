import { Component } from '@angular/core';
import './rxjs-operators';
import {Event} from "./event";
import { Observable }       from 'rxjs/Observable';
import { EventService } from './event.service';

@Component({
    selector: 'ox-app',
    templateUrl: `ox-app/event-summary.html`,
    providers: [EventService]
})
export class AppComponent {
    events: Observable<Event[]>;
    list: Observable<string[]>;
    private error: any;
    selectedEvent: Event;
    onSelect = (event: Event) => {
        this.selectedEvent = event;
    }
    getEvents = () => {
        this.eventService.getEvents().subscribe(
            (data: Event[]) => { this.events = data; },
            (err: any) => this.error = err);
    }
    ngOnInit() {
        this.getEvents();
    }
    public constructor(private eventService: EventService) {
        
    }
}