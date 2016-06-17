import { Component } from '@angular/core';
import './rxjs-operators';
import {Event} from "./event";
import { Observable }       from 'rxjs/Observable';
import { WikiComponent }      from './wiki/wiki.component';
import { EventService } from './event.service';
import { JSONP_PROVIDERS }  from '@angular/http';

@Component({
    selector: 'ox-app',
    templateUrl: `ox-app/event-summary.html`,
    providers: [JSONP_PROVIDERS, EventService],
    directives: [WikiComponent]
})
export class AppComponent {
    events: Observable<Event[]>;
    selectedEvent: Event;
    onSelect = (event: Event) => {
        this.selectedEvent = event;
    }
    getEvents = () => {
        this.events = this.eventService.getEvents();
    }
    ngOnInit() {
        this.getEvents();
    }
    public constructor(private eventService: EventService) {
        
    }
}