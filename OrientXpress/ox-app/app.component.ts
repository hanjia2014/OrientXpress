import { Component } from '@angular/core';
import {Event} from "./event";
import { EventService } from './event.service';

@Component({
    selector: 'ox-app',
    template: `Hello`,
    providers: [EventService]
})
export class AppComponent {
    
    public constructor(private eventService: EventService) {
        
    }
}