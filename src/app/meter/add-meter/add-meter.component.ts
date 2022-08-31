
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup , Validators} from '@angular/forms';
import { Meter } from 'src/app/models/meter';
import { MeterService } from 'src/app/services/meter.service';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-add-meter',
  templateUrl: './add-meter.component.html',
  styleUrls: ['./add-meter.component.css']
})
export class AddMeterComponent implements OnInit {

  formValue!:FormGroup; 
  submitted = false;

  
  


  constructor(private meterService : MeterService,  private formbuilder:FormBuilder , private router : Router) { }

  ngOnInit(): void {


  /*   if(!localStorage.getItem('access_token')){
      this.router.navigate(['/Login']);

    }
  */


   /*  this.formValue=this.formbuilder.group({

      node_id: [Number, Validators.required],
      name: ['', Validators.required],
      serial_number: ['', Validators.required],
      manufacturer: ['', Validators.required],
      method: ['', Validators.required],
      port: ['', Validators.required],
      baudrate:  [Number, Validators.required],
      token: ['', Validators.required]
    })  */


    this.formValue = new FormGroup({
      node_id: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      serial_number:new FormControl('', [Validators.required]),
      manufacturer:new FormControl('', [Validators.required]),
      method:new FormControl('', [Validators.required]),
      port: new FormControl('', [Validators.required]),
      baudrate:  new FormControl('', [Validators.required]),
      token: new FormControl('', [Validators.required])
    });



     
  }

  get f(){
    return this.formValue.controls;
  }
  addMeter(){
    console.log("amira bnjr ")
    this.submitted = true;

    console.log("add Meter");
    

   this.meterService.addMeter(this.formValue.value).subscribe( data => {
      console.log( 'Ajout avec sucess'); 
      
    }); 

    this.router.navigate(['/MetersList']);
   

  }

}
