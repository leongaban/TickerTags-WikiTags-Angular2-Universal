import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { CategoryComponent } from '../category/category.component';

@NgModule({
	imports: [
		RouterModule.forChild([
			{
				path: 'wiki',
				component: HomeComponent,
				children: [
					{
						path: 'category',
						component: CategoryComponent
					}
				]
			}
		])
	]
})
export class HomeRoutingModule { }