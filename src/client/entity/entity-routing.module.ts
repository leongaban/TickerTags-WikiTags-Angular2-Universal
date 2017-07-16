import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EntityComponent } from './entity.component';

@NgModule({
	imports: [
		RouterModule.forChild([
			{ path: 'entity', component: EntityComponent }
		])
	]
})
export class EntityRoutingModule { }