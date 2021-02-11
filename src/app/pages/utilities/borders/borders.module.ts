import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BordersRoutingModule } from './borders-routing.module';
import { BordersComponent } from './borders.component';


@NgModule({
  declarations: [BordersComponent],
  imports: [
    CommonModule,
    BordersRoutingModule
  ]
})
export class BordersPageModule {}
