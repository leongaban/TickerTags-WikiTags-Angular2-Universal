import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { EntityComponent } from './entity/entity.component';
import { HomeComponent } from './home/home.component';
import { VoteComponent } from './vote/vote.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', redirectTo: 'wiki', pathMatch: 'full' },
            // { path: 'wiki', component: HomeComponent },
            // { path: 'wiki/entity/:id', component: EntityComponent },
            // { path: 'wiki/category/:id', component: CategoryComponent },
            // { path: 'wiki/vote' , component: VoteComponent }
        ])
    ]
})
export class AppRoutingModule { }