import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {Gateway} from "src/app/models/gateway";
import {GatewayserviceService} from "src/app/services/gatewayservice.service";


@Component({
  selector: 'app-add-gateway',
  templateUrl: './add-gateway.component.html',
  styleUrls: ['./add-gateway.component.css']
})
export class AddGatewayComponent implements OnInit {


  formValue!:FormGroup; 


  constructor(private gatewayService : GatewayserviceService,  private formbuilder:FormBuilder , private router : Router) { }

  ngOnInit(): void {


   

    this.formValue = new FormGroup({
      id: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      location:new FormControl('', [Validators.required]),
      pulling_period:new FormControl('', [Validators.required]),
      pushing_period:new FormControl('', [Validators.required]),
      host: new FormControl('', [Validators.required]),
      port:  new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),

      password: new FormControl('', [Validators.required]),
      use_tls: new FormControl('', [Validators.required]),
      topic:new FormControl('', [Validators.required]),
      log_file:new FormControl('', [Validators.required]),
      backup_file:new FormControl('', [Validators.required]),
      hw_model: new FormControl('', [Validators.required]),
      sw_version:  new FormControl('', [Validators.required]),
      serial_number: new FormControl('', [Validators.required]),

      board_serial_number:  new FormControl('', [Validators.required]),
      asset_id: new FormControl('', [Validators.required])
    });


   /*  this.formValue=this.formbuilder.group({
      id: Number,
      name: [''],
      location: [''],
      pulling_period: Number,
      pushing_period: Number,
      host: [''],
      port: Number,
      username: [''],
      password : [''],
      use_tls : Number,
      topic : [''],
      log_file: [''],
      backup_file: [''],
      hw_model: [''],
      sw_version: [''],
      serial_number: [''],
      board_serial_number: [''],
      asset_id: [''],
   

    })  */
  }



  get f(){
    return this.formValue.controls;
  }
  
  addGateway(){
    console.log("add Gateway");
    console.log(this.formValue.value);
    

    


   this.gatewayService.addGateway(this.formValue.value).subscribe( data => {
      console.log( 'Ajout avec sucess'); 
      
    }); 
  }
}
