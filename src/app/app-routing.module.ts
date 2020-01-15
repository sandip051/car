import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { CustomerregisterComponent } from './customerregister/customerregister.component';
import { AdminComponent } from './admin/admin.component';
import { SupervisorComponent } from './supervisor/supervisor.component';
import { SuperRegisterComponent } from './super-register/super-register.component';
import { AdminregisterComponent } from './adminregister/adminregister.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component'
import { CustomerReqComponent } from './customer-req/customer-req.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { CustomerrequestformComponent } from './customerrequestform/customerrequestform.component'
import { HomeComponent } from './home/home.component';
import { CustomerServiceComponent } from './customer-service/customer-service.component';
import {
  AuthGardService as AuthGuard
} from './auth-gard.service';




const routes: Routes = [

  {
    path: "customer/home", component: HomeComponent, canActivate: [AuthGuard],
    data: {
      expectedRole: 'customer',
      path:'customer/home'
    }
  },
  {
    path: "admin/dashboard", component: AdmindashboardComponent, canActivate: [AuthGuard],
    data: {
      expectedRole: 'admin',
      path:'admin/dashboard'
    }
  },
  {
    path: "admin/customerReq", component: CustomerReqComponent, canActivate: [AuthGuard],
    data: {
      expectedRole: 'admin',
      path:'admin/customerReq'
    }
  },
  {
    path: "admin/appointment", component: AppointmentComponent, canActivate: [AuthGuard],
    data: {
      expectedRole: 'admin',
      path:'admin/appointment'
    }
  },
  { path: "customer", component: CustomerComponent },
  { path: "customer/register", component: CustomerregisterComponent },
  { path: "admin", component: AdminComponent },
  { path: "admin/register", component: AdminregisterComponent },
  { path: "supervisor", component: SupervisorComponent },
  { path: "supervisor/register", component: SuperRegisterComponent },
  { path: "customerRequestform", component: CustomerrequestformComponent },
  {
    path: "customerService", component: CustomerServiceComponent, canActivate: [AuthGuard],
    data: {
      expectedRole: 'customer',
      path:'customerService'
    }
  },
  { path: '**', redirectTo: 'customer' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
