import { Component } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES } from '@angular/router';
import './rxjs-operators';
import {Event} from "./event";
import { Observable }       from 'rxjs/Observable';
import { EventService } from './event.service';
import {EventDetail} from './event-detail.component';

@Component({
    selector: 'ox-app',
    templateUrl: `ox-app/event-summary.html`,
    providers: [EventService],
    directives: [ROUTER_DIRECTIVES]
})
@Routes([
    { path: '/eventdetail/:id', component: EventDetail }
])

export class AppComponent {
    events: Observable<Event[]>;
    private error: any;
    selectedEvent: Event;
    onSelect = (event: Event) => {
        this.selectedEvent = event;
    }
    getEvents = () => {
        this.eventService.getEvents().subscribe(
            (data: Event[]) => {
                this.events = data;
                this.events.forEach((event: Event) => {
                    this.truncateContent(event);
                });
            },
            (err: any) => this.error = err);
    }
    ngOnInit() {
        this.getEvents();
    }

    truncateContent(event: Event) {
        var maxLength = 100;
        //trim the string to the maximum length
        var trimmedString = event.Content.substr(0, maxLength);
        //re-trim if we are in the middle of a word
        trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")));
        event.Truncate = trimmedString + "...";
    }

    public constructor(private eventService: EventService) {
        
    }
}