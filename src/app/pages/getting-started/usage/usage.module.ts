import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsageRoutingModule } from './usage-routing.module';
import { UsageComponent } from './usage.component';

import { CodeComponentModule } from '../../../components/code/code.module';

@NgModule({
  declarations: [UsageComponent],
  imports: [
    CommonModule,
    CodeComponentModule,
    UsageRoutingModule
  ]
})
export class UsagePageModule {}
