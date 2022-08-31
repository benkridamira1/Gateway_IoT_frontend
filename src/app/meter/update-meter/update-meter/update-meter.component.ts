import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Meter } from 'src/app/models/meter';
import { MeterService } from 'src/app/services/meter.service';
import { FormBuilder, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-update-meter',
  templateUrl: './update-meter.component.html',
  styleUrls: ['./update-meter.component.css']
})
export class UpdateMeterComponent implements OnInit {

  id !:any;

  newmeter : Meter = new Meter();
  oldmeter : Meter = new Meter();
  formValue!:FormGroup; 



  constructor(private meterService : MeterService, private router : Router  , private activatedroute:ActivatedRoute  , private formbuilder:FormBuilder) { }

  ngOnInit(): void {


    this.formValue=this.formbuilder.group({
      node_id: Number,
      name: [''],
      serial_number: [''],
      manufacturer: [''],
      method: [''],
      port: [''],
      baudrate: Number,
      token: ['']
    }) 

    this.activatedroute.paramMap.subscribe(params => { 
      this.id = params.get('id'); 
  });
  this.meterService.getMeterByID(this.id).subscribe(data => { this.oldmeter=<Meter>data ; console.log(this.oldmeter);});



  }

  update(){
    this.meterService.updateMeter(this.oldmeter,this.id).subscribe(off=>{
  

      this.router.navigate(['MetersList']);
      //window.location.reload();

    }, (error)=>{alert(error.message)})
  }

}
