import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NavbarComponent } from './navbar/navbar.component';
import { MeterService } from './services/meter.service';
import { MaterialModule } from "./material/material.module" ;
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { AddMeterComponent } from './meter/add-meter/add-meter.component';
import { ListMeterComponent } from './meter/list-meter/list-meter.component';
import { AddGatewayComponent } from './gateway/add-gateway/add-gateway.component';
import { ListGatewayComponent } from './gateway/list-gateway/list-gateway.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import {authInterceptorProviders} from './_helpers/auth.interceptor';
import { UpdateMeterComponent } from './meter/update-meter/update-meter/update-meter.component';
import { UpdateGatewayComponent } from './gateway/update-gateway/update-gateway.component';
import { TestAddComponent } from './test-add/test-add.component';
import { CronComponent } from './cron/cron.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AddMeterComponent,
    ListMeterComponent,
    AddGatewayComponent,
    ListGatewayComponent,
    AdminComponent,
    LoginComponent,
    UpdateMeterComponent,
    UpdateGatewayComponent,
    TestAddComponent,
    CronComponent  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],

  providers: [MeterService, authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
