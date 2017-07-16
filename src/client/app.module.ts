import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';

import { HomeModule } from './home/home.module';
import { CategoryModule } from './category/category.module';
import { EntityModule } from './entity/entity.module';
import { VoteModule } from './vote/vote.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
	    SharedModule,
	    HomeModule,
	    CategoryModule,
	    EntityModule,
	    VoteModule,
	    AppRoutingModule
	]
})
export class AppModule {
}

export { AppComponent } from './app.component';