import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpacingRoutingModule } from './spacing-routing.module';
import { SpacingComponent } from './spacing.component';


@NgModule({
  declarations: [SpacingComponent],
  imports: [
    CommonModule,
    SpacingRoutingModule
  ]
})
export class SpacingPageModule {}
