import Entity from './entity';
import EntityCard from './entity-card';
import Category from '../category/category';

export class EntityPage {
	type: string; // person, company, thing
	title: string;
	description: {};
	chart?: {};
	meta: [{}];
	rankings: Array<Category>;
	related_tags: Array<EntityCard>;
	tag_cloud: [{}];
	todays_news?: Array<{}>;
}