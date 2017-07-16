import { Component,
		 ChangeDetectionStrategy,
		 EventEmitter,
		 Output,
		 OnInit,
		 ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../shared/services/api.service';
import EntityCard from '../shared/models/entity/entity-card';

@Component({
	changeDetection: ChangeDetectionStrategy.Default,
	encapsulation: ViewEncapsulation.Emulated,
	selector: 'category',
	styleUrls: [ './category.component.css' ],
	templateUrl: './category.component.html'
})
export class CategoryComponent implements OnInit {
	entityCards: Array<EntityCard>
	title: string = '';
	@Output() onCategoryTitled = new EventEmitter<string>();

	constructor(private api: ApiService, private route: ActivatedRoute) {}

	ngOnInit() {
		const id   = this.route.snapshot.params['id'];
		this.title = this.route.snapshot.params['title'];

		console.log('this.title', this.title)
		this.onCategoryTitled.emit(this.title);

        this.api.getCategory(id)
            .subscribe(cards => {
                this.entityCards = cards;
                // console.log('this.route.snapshot.params', this.route.snapshot.params)
                // console.log('this.entityCards', this.entityCards);
            });
    }
}