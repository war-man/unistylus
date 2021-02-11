import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RebootRoutingModule } from './reboot-routing.module';
import { RebootComponent } from './reboot.component';

import { CodeComponentModule } from '../../../components/code/code.module';
@NgModule({
  declarations: [RebootComponent],
  imports: [
    CommonModule,
    CodeComponentModule,
    RebootRoutingModule
  ]
})
export class RebootPageModule {}
