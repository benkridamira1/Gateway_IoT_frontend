import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CronOptions } from 'ngx-cron-editor';


@Component({
  selector: 'app-cron',
  templateUrl: './cron.component.html',
  styleUrls: ['./cron.component.css']
})
export class CronComponent implements OnInit {

  cronForm!:any;
  x!:any;


  constructor() { }

  ngOnInit(): void {
    this.cronForm = new FormControl('0 0 1/1 * *');


  }
  public cronOptions: CronOptions = {
    defaultTime: "00:00:00",

    hideMinutesTab: false,
    hideHourlyTab: false,
    hideDailyTab: false,
    hideWeeklyTab: false,
    hideMonthlyTab: false,
    hideYearlyTab: false,
    hideAdvancedTab: true,
    hideSpecificWeekDayTab: false,
    hideSpecificMonthWeekTab : false,

    use24HourTime: true,
    hideSeconds: false,

    cronFlavor: "quartz" //standard or quartz
 };

}
