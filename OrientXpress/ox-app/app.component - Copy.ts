import { Component } from '@angular/core';
import {Event} from "./event";
import { EventService } from './event.service';

@Component({
    selector: 'ox-app',
    templateUrl: `ox-app/event-summary.html`,
    providers: [EventService]
})
export class AppComponent {
    events: Event[];
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