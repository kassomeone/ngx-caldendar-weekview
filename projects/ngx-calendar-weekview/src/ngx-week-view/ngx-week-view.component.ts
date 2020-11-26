import { Component, Input, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'ngx-week-view',
  templateUrl: './ngx-week-view.component.html',
  styleUrls: ['./ngx-week-view.component.css']
})
export class NgxWeekViewComponent implements OnInit {

  private _appointments = [];
  public get appointments() {
    return this._appointments;
  }

  @Input()
  public set appointments(value) {
    this._appointments = value ? value : [];
  }
  private _startDate = new Date();
  public get startDate() {
    return this._startDate;
  }
  @Input()
  public set startDate(value) {
    this._startDate = value ? value : new Date();
  }



  weekHour = [];
  color = [
    "#ffd3cb",
    "#c8f3d0",
    "#ffffa6",
    "#d4e6ff",
    "#ffdee4",
    "#ffc7ff",
    "#d0f9ff",
    "#ffdee4"
  ];

  constructor() { }

  ngOnInit(): void {
    this.showWeekView(this.startDate);
  }

  showWeekView(date: Date) {
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    date.setMilliseconds(0);

    const currDay = date.getDay();
    for (let i = 0; i <= 24; i++) {
      const dayOfWeek = new Date(date);
      if (i > 0) {
        dayOfWeek.setHours(i - 1);
      }
      dayOfWeek.setDate(date.getDate() - currDay);
      this.weekHour.push({
        hour: i == 0 ? "" : dayOfWeek
      });
      for (let j = 0; j < 7; j++) {
        this.weekHour.push({
          day: new Date(dayOfWeek),
          appointment: this.getAppointment(new Date(dayOfWeek), i + 1)
        });
        dayOfWeek.setDate(dayOfWeek.getDate() + 1);
      }
    }

  }

  getAppointment(date: Date, hour) {

    let response;

    const appointsOfDay = this.appointments.find(item => item.day.getDate() == date.getDate() && item.day.getFullYear() == date.getFullYear() && item.day.getMonth() == date.getMonth());

    if (appointsOfDay) {
      const appOfHour = appointsOfDay.appointments.find(item => {
        console.log(item.time.getHours(), hour);
        return item.time.getHours() == hour;
      });
      response = appOfHour ? appOfHour.appointment : [];
    } else {
      response = [];
    }

    return of(response);

    // return of([]);
    if (date.getDate() % 2 === 0) {
      return of([
        {
          start: 0,
          end: 30,
          title:
            "Doctor1 kjjkhsaf kjsdhkf skadhf kshdakjf ksjhdkfj hkjs hdakjfh sadf"
        },
        { start: 30, end: 45, title: "Doctor2" },
        { start: 45, end: 60, title: "Doctor3" }
      ]);
      //.pipe(delay(Math.floor(Math.random() * 0) + 1));
    } else {
      return of([
        // { start: 30, end: 60, title: "Doctor1" },
        {
          start: 0,
          end: 30,
          title: "Doctor2"
        },
        {
          start: 30,
          end: 60,
          title: "Doctor3"
        }
        // { start: 0, end: 2, title: "Doctor2" },
        // { start: 2, end: 6, title: "Doctor3" }
      ]);
      //.pipe(delay(Math.floor(Math.random() * 0) + 1));
    }
  }

  getHeight(item) {
    // return Number(item.end - item.start) * 1 + "px";
  }
  getMargin(item) {
    // return item.start * 1.5 + "px 0 " + (60 - item.end) * 1.5 + "px 0";
    // return item.start * 1.5 + "px 0 " + (60 - item.end) * 0 + "px 0";
  }

}
