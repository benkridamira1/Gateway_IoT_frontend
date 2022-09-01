import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup , Validators} from '@angular/forms';
import { Meter } from 'src/app/models/meter';
import { CronService } from 'src/app/services/cron.service';
import { Router, RouterLink } from '@angular/router';
import { CronOptions } from 'ngx-cron-editor';


@Component({
  selector: 'app-add-cron-job',
  templateUrl: './add-cron-job.component.html',
  styleUrls: ['./add-cron-job.component.css']
})
export class AddCronJObComponent implements OnInit {
  formValue!:FormGroup; 
  submitted = false;

  cronForm!:any;
  x!:any;

  constructor(private cronService : CronService,  private formbuilder:FormBuilder , private router : Router) { }

  ngOnInit(): void {
    this.formValue = new FormGroup({
      name: new FormControl('', [Validators.required]),
      command:new FormControl('', [Validators.required]),
      schedule:new FormControl('', [Validators.required]),
      description:new FormControl('', [Validators.required]),
      enabled: new FormControl(Number, [Validators.required]),
    
    });


    this.cronForm = new FormControl('0 0 1/1 * *');

  }


  get f(){
    return this.formValue.controls;
  }
  addCronJob(){
    console.log("amira bnjr ")
    this.submitted = true;

    console.log("add Meter");
    

   this.cronService.addCronJob(this.formValue.value).subscribe( data => {
      console.log( 'Ajout avec sucess'); 
      
    }); 

    this.router.navigate(['/CronsList']);
   

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
