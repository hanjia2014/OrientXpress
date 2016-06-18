import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Event} from './event';

@Component({
    selector: 'event-detail',
    templateUrl: `ox-app/event-detail.html`
})

export class EventDetail {
    @Input()
    event: Event;
}