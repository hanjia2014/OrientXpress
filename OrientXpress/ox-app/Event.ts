export class Event {
    id: number;
    title: string;
    content: string;
    date: Date;

    static create(data: any) {
        return new Event(data);
    }

    constructor(data: any) {
        this.id = data._id;
        this.title = data.title;
        this.content = data.content;
        this.date = data.date;
    }
}