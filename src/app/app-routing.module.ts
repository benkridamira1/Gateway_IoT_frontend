import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddGatewayComponent } from './gateway/add-gateway/add-gateway.component';
import { ListGatewayComponent } from './gateway/list-gateway/list-gateway.component';
import { UpdateGatewayComponent } from './gateway/update-gateway/update-gateway.component';
import { LoginComponent } from './login/login.component';
import { AddMeterComponent } from './meter/add-meter/add-meter.component';
import { ListMeterComponent } from './meter/list-meter/list-meter.component';
import { UpdateMeterComponent } from './meter/update-meter/update-meter/update-meter.component';
import { TestAddComponent } from './test-add/test-add.component';

const routes: Routes = [

  {path: 'MetersList/AddMeter' ,  component: AddMeterComponent},
  {path: 'MetersList' ,  component: ListMeterComponent},

  {path :'MetersList/editMeter/:id',  component: UpdateMeterComponent},

  {path: 'AddGateway' ,  component: AddGatewayComponent},
  { path :'updateGateway' , component : UpdateGatewayComponent} , 

  {path: 'GatewaysList' ,  component: ListGatewayComponent},

  {path: 'AddCron' ,  component: ListMeterComponent},
  {path: 'CronsList' ,  component: ListMeterComponent},
  {path :'Login',  component: LoginComponent},

  {path :'test',  component: TestAddComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
