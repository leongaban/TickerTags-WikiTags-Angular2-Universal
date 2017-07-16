import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { VoteComponent } from './vote.component';
import { VoteRoutingModule } from './vote-routing.module';

@NgModule({
  imports: [
    SharedModule,
    VoteRoutingModule
  ],
  declarations: [
    VoteComponent
  ]
})
export class VoteModule { }
