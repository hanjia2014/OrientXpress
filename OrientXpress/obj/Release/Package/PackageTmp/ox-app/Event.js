"use strict";
var Event = (function () {
    function Event(data) {
        this.id = data._id;
        this.title = data.title;
        this.content = data.content;
        this.date = data.date;
    }
    Event.create = function (data) {
        return new Event(data);
    };
    return Event;
}());
exports.Event = Event;
//# sourceMappingURL=event.js.map