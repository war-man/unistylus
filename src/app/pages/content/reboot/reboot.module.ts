import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RebootRoutingModule } from './reboot-routing.module';
import { RebootComponent } from './reboot.component';


@NgModule({
  declarations: [RebootComponent],
  imports: [
    CommonModule,
    RebootRoutingModule
  ]
})
export class RebootPageModule {}
