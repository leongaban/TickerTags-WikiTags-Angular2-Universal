export default class Entity {
	id: number;
	type: string; // person, company, thing
	title: string;
	image: string;
	tags: Array<string>;
	description: string;
}