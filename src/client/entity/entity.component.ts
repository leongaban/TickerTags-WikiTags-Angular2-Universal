import { Component, ChangeDetectionStrategy, ViewEncapsulation, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../shared/services/api.service';
import EntityMeta from '../shared/models/entity/entity-meta';
import EntityRank from '../shared/models/entity/entity-rank';
import EntityRelatedTag from '../shared/models/entity/entity-related-tag';
import EntityTag from '../shared/models/entity/entity-tag';
import NewsSnippet from '../shared/models/news/news-snippet';
import { splitAt } from "ramda";

@Component({
    changeDetection: ChangeDetectionStrategy.Default,
    encapsulation: ViewEncapsulation.Emulated,
    selector: 'entity',
    styleUrls: [ './entity.component.css' ],
    templateUrl: './entity.component.html'
})
export class EntityComponent implements OnInit {
	title: string;
	meta: EntityMeta;
    rankings_col_1: Array<EntityRank>;
    rankings_col_2: Array<EntityRank>;
    tags: Array<EntityRelatedTag>;
    cloud: Array<EntityTag>;
    news: Array<NewsSnippet>;

    constructor(private api: ApiService, private route: ActivatedRoute) {}

    ngOnInit() {
        const id   = this.route.snapshot.params['id'];
        this.title = this.route.snapshot.params['title'];

        this.api.getEntityMeta(id)
            .subscribe(entityMeta => this.meta = entityMeta);

        this.api.getEntityRankings(id)
            .subscribe(entityRankings => createColumns(entityRankings));

        this.api.getEntityRelatedTags(id)
            .subscribe(entityTags => this.tags = entityTags);

        this.api.getTagCloud(id)
            .subscribe(tagCloud => this.cloud = tagCloud);

        this.api.getEntityNews(id)
            .subscribe(news => this.news = news);

        const createColumns = (entityRankings) => {
            const len = entityRankings.length;
            const div = Math.ceil(len/2);
            const columns = splitAt(div, entityRankings);
            this.rankings_col_1 = columns[0];
            this.rankings_col_2 = columns[1];
        }
    }
}