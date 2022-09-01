import { CdkPortal } from '@angular/cdk/portal';
import { Component, OnInit } from '@angular/core';
import { MatCardLgImage } from '@angular/material/card';
import { Meter } from 'src/app/models/meter';
import { MeterService } from 'src/app/services/meter.service'
import { Router,RouterLink } from '@angular/router';

import { FormBuilder, FormControl, FormGroup , Validators} from '@angular/forms';

@Component({
  selector: 'app-list-meter',
  templateUrl: './list-meter.component.html',
  styleUrls: ['./list-meter.component.css']
})
export class ListMeterComponent implements OnInit {


  id !: any;

  meters : any =[];
  msg: string = ''; 
  newmeter : Meter = new Meter();
  oldmeter : Meter = new Meter();
  formValue!:FormGroup; 

  id_updated_meter !: any;



  constructor(private meterService : MeterService, private router : Router , private formbuilder:FormBuilder) { }

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
   

    this.meterService.MetersList().subscribe(meter=>{
      this.meters=meter


      console.log(this.meters);
    });



   
  }

  OldMeterID($id  : any){
    console.log("OldMeterID:  id= "+$id);
    this.id_updated_meter=$id;
    console.log("OldMeterID: this id= "+$id);
    console.log("OldMeterID:   this id_updated_meter= "+this.id_updated_meter);



    this.meterService.getMeterByID($id).subscribe(data => { this.oldmeter=<Meter>data ; console.log(this.oldmeter);});

      
  }
  update(){
    this.meterService.updateMeter(this.oldmeter,this.id_updated_meter).subscribe(off=>{
  

     // this.router.navigate(['MetersList']);
      window.location.reload();

    }, (error)=>{alert(error.message)})
  }


  

  MetersList(){

    console.log(this.meters);

  }


  deleteMeter($id  : any){
  //  console.log("delete"+$id);
    console.log("deleteMeter :    id to be deleted"+$id )
    console.log(" deleteMeter:   this.id_updated_meter"+this.id_updated_meter );

    $id=this.id_updated_meter;
    this.id_updated_meter=$id;

    console.log("deleteMeter After:    id to be deleted"+$id )
    console.log(" deleteMeter  After:   this.id_updated_meter"+this.id_updated_meter );

    this.meterService.deleteMeter($id ).subscribe(data=>{
      console.log("deleteMeter :    Meter deleted "+$id );
      window.location.reload();



    })

  }


  checkAllCheckBox(ev: any) { 
		this.meters.forEach(function (x : any) {
        return x.checked = ev.target.checked;
      });
  

	}


  isAllCheckBoxChecked() {
		return this.meters.every((p : any) => p.checked);
   
	}




  deleteMeters(): void {
		const selectedMeters = this.meters.filter((meter : any) => meter.checked).map((p:any) => p.node_id);
    
		
		if(selectedMeters && selectedMeters.length > 0) {

      selectedMeters.forEach((element : any) => {

      this.meterService.deleteMeter(element) // Angular 13
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
