import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup , FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Gateway } from 'src/app/models/gateway';
import { GatewayserviceService } from 'src/app/services/gatewayservice.service';

@Component({
  selector: 'app-update-gateway',
  templateUrl: './update-gateway.component.html',
  styleUrls: ['./update-gateway.component.css']
})
export class UpdateGatewayComponent implements OnInit {

  oldgateway : any= [];
  formValue!:FormGroup; 



  constructor(private gatewayService : GatewayserviceService ,  private router : Router ,  private formbuilder:FormBuilder) { }
  ngOnInit(): void {

   

    this.formValue = new FormGroup({
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
    }) 

    this.gatewayService.getGateway().subscribe(data => { this.oldgateway=data 
      console.log(this.oldgateway);});
  }


  get f(){
    return this.formValue.controls;
  }

  update(){
    console.log("update gateway");
    this.gatewayService.updateGateway(this.oldgateway).subscribe(off=>{
  

      this.router.navigate(['GatewaysList']);
      //window.location.reload();

    }, (error)=>{alert(error.message)})
  }



  

}
