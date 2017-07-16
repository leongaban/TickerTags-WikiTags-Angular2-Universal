import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { EntityComponent } from './entity.component';
import { EntityRoutingModule } from './entity-routing.module';

@NgModule({
	imports: [
		SharedModule,
		EntityRoutingModule
	],
	declarations: [
		EntityComponent
	]
})
export class EntityModule { }