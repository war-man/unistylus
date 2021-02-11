import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';

import { CodeComponentModule } from '../../../components/code/code.module';

@NgModule({
  declarations: [CoreComponent],
  imports: [
    CommonModule,
    CodeComponentModule,
    CoreRoutingModule
  ]
})
export class CorePageModule {}
