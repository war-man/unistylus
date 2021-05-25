import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstallRoutingModule } from './install-routing.module';
import { InstallComponent } from './install.component';

import { CodeComponentModule } from '../../../components/code/code.module';

@NgModule({
  declarations: [InstallComponent],
  imports: [
    CommonModule,
    InstallRoutingModule,
    CodeComponentModule,
  ]
})
export class InstallPageModule {}
