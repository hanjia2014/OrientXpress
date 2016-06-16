import { Component } from '@angular/core';
import './rxjs-operators';
import {Event} from "./event";
import { WikiComponent }      from './wiki/wiki.component';
import { EventService } from './event.service';

@Component({
    selector: 'ox-app',
    templateUrl: `ox-app/event-summary.html`,
    providers: [EventService],
    directives: [WikiComponent]
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