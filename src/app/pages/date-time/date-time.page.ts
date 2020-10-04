import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

  fechaNaci: Date = new Date();
  customYearValues = [2025, 2020, 2015, 2010, 2005];
  customPickerOptions = {
    buttons: [
      {
        text: 'Hola',
        handler: (event) => {
          console.log(event);
        }
      },
      {
        text: 'Mundo',
        handler: (event) => {
          console.log('log');
        }
      }
    ]
  }

  constructor() { }

  ngOnInit() {
  }

  cambioFecha(event) {
    console.log(event);
    console.log(event.detail.value);

  }

}
