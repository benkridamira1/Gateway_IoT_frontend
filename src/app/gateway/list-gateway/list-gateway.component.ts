import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import {GatewayserviceService} from "src/app/services/gatewayservice.service";

@Component({
  selector: 'app-list-gateway',
  templateUrl: './list-gateway.component.html',
  styleUrls: ['./list-gateway.component.css']
})
export class ListGatewayComponent implements OnInit {


  gateway : any= [];
  msg: string = ''; 


  constructor(private router : Router, private gatewayService : GatewayserviceService) { }

  ngOnInit(): void {

   /*  if(!localStorage.getItem('access_token')){
      console.log("am here");
      this.router.navigate(['/Login']);
      

    } */



    this.gatewayService.getGateway().subscribe(g =>{
      this.gateway=g
      console.log(g);
    });
  }

  deleteGateway(){
    this.gatewayService.deleteGateway().subscribe(data=>{
      console.log("Gateway deleted ");
      window.location.reload();

    })

}

}
