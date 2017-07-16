import { Component, ChangeDetectionStrategy, ViewEncapsulation, OnInit } from '@angular/core';
import { ApiService } from '../shared/services/api.service';
import { FeaturedCategory } from '../shared/models/home/featuredcategory';
import * as R from "ramda";

@Component({
    changeDetection: ChangeDetectionStrategy.Default,
    encapsulation: ViewEncapsulation.Emulated,
    selector: 'home',
    styleUrls: [ './home.component.css' ],
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
    featuredCategories: Array<FeaturedCategory>;
    baseYoutubeUrl:string = 'https://www.youtube.com/embed/';

    constructor(private api: ApiService) {
        // we need the data synchronously for the client to set the server response
        // we create another method so we have more control for testing
        // this.universalInit();
    }

    // universalInit() {}

    ngOnInit() {
        this.api.getFeatured()
            .subscribe(categories => {
                this.featuredCategories = categories;
            });
    }
}