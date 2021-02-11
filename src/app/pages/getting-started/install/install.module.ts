import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstallRoutingModule } from './install-routing.module';
import { InstallComponent } from './install.component';


@NgModule({
  declarations: [InstallComponent],
  imports: [
    CommonModule,
    InstallRoutingModule
  ]
})
export class InstallPageModule {}
