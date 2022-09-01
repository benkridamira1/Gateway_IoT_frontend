import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCronJObComponent } from './cron/add-cron-job/add-cron-job.component';
import { CronComponent } from './cron/cron.component';
import { CronlistComponent } from './cron/cronlist/cronlist.component';
import { AddGatewayComponent } from './gateway/add-gateway/add-gateway.component';
import { ListGatewayComponent } from './gateway/list-gateway/list-gateway.component';
import { UpdateGatewayComponent } from './gateway/update-gateway/update-gateway.component';
import { LoginComponent } from './login/login.component';
import { AddMeterComponent } from './meter/add-meter/add-meter.component';
import { ListMeterComponent } from './meter/list-meter/list-meter.component';
import { UpdateMeterComponent } from './meter/update-meter/update-meter/update-meter.component';

const routes: Routes = [

  {path: 'MetersList/AddMeter' ,  component: AddMeterComponent},
  {path: 'MetersList' ,  component: ListMeterComponent},

  {path :'MetersList/editMeter/:id',  component: UpdateMeterComponent},

  {path: 'AddGateway' ,  component: AddGatewayComponent},
  { path :'updateGateway' , component : UpdateGatewayComponent} , 

  {path: 'GatewaysList' ,  component: ListGatewayComponent},

  {path: 'CronsList/AddCronJob' ,  component: AddCronJObComponent},
  {path: 'CronsList' ,  component: CronlistComponent},
  {path :'Login',  component: LoginComponent},







];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
