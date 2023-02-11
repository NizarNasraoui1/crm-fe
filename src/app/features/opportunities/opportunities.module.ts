import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OpportunitiesRoutingModule } from './opportunities-routing.module';
import { OpportunityListComponent } from './components/opportunity-list/opportunity-list.component';

import { MatCardModule } from '@angular/material/card';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    OpportunityListComponent
  ],
  imports: [
    CommonModule,
    OpportunitiesRoutingModule,
    MatCardModule,
    DragDropModule,

  ]
})
export class OpportunitiesModule { }
