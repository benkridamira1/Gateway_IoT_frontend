import { Component, OnInit } from '@angular/core';
import { CronJob } from 'src/app/models/cronjob';
import { FormBuilder, FormControl, FormGroup , Validators} from '@angular/forms';
import { Router,RouterLink } from '@angular/router';




import {CronService  } from 'src/app/services/cron.service'
//import cronstrue from 'cronstrue';
import cronstrue from 'cronstrue/i18n';


@Component({
  selector: 'app-cronlist',
  templateUrl: './cronlist.component.html',
  styleUrls: ['./cronlist.component.css']
})
export class CronlistComponent implements OnInit {

  cronJobsList : any =[];
  id_updated_job !: any;
  msg: string = ''; 

  oldjob : CronJob = new CronJob();
  x!:any;

  formValue!:FormGroup; 


  id_updated_meter !: any;
  old: CronJob = new CronJob();


  constructor(private cronservice :CronService, private router : Router , private formbuilder:FormBuilder ) { }

  ngOnInit(): void {

    this.formValue=this.formbuilder.group({
      name: [''],
      command: [''],
      schedule: [''],
      description: [''],
      enabled:Number
    }) 

    this.cronservice.CronJobsList().subscribe(cronJob=>{
    
      cronJob.forEach(job => {
        job.schedule=cronstrue.toString(job.schedule, { locale: "fr" });
        
      });

      this.cronJobsList=cronJob


      console.log(this.cronJobsList);
    });

  

  }


  checkAllCheckBox(ev: any) { 
		this.cronJobsList.forEach(function (x : any) {
        return x.checked = ev.target.checked;
      });
  

	}


  isAllCheckBoxChecked() {
		return this.cronJobsList.every((p : any) => p.checked);
   
	}

  OldJobName($name  : any){
    console.log("OldMeterID:  id= "+$name);
    this.id_updated_job=$name;
    console.log("OldMeterID: this id= "+$name);
    console.log("OldMeterID:   this id_updated_meter= "+this.id_updated_job);

    this.cronservice.getCronJobByName($name).subscribe(data => { this.oldjob=<CronJob>data ;
       console.log(this.oldjob);});
     
      

  
      
  }


  update(){
    console.log("hello amira");
    this.cronservice.updateCronJob(this.oldjob,this.id_updated_job).subscribe(off=>{
  
  
     // this.router.navigate(['MetersList']);
     // window.location.reload();
  
    }, (error)=>{alert(error.message)})
  }
  

  deleteCronJob($name:string){
    $name=this.id_updated_job;
    this.id_updated_job=$name;
    this.cronservice.deleteCronJob($name ).subscribe(data=>{
      console.log("deleteMeter :    Meter deleted "+$name );
      window.location.reload();
  });
}



deleteSelectedCronJobs(): void {
  console.log("delete all");
  const selectedMeters = this.cronJobsList.filter((meter : any) => meter.checked).map((p:any) => p.name);
  
  if(selectedMeters && selectedMeters.length > 0) {

    selectedMeters.forEach((element : any) => {

    this.cronservice.deleteCronJob(element) // Angular 13
    .subscribe(res => {
      this.msg = 'Meter successfully deleted';
      }, err => {
        this.msg = 'Something went wrong during deleting meter';
                }
            );
    
  });
     
  } else {
    this.msg = 'You must select at least one meter';
  }


  console.log(this.msg);

  window.location.reload();



}



}
