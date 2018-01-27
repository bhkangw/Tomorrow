export class Bucket {
	public title: string;
	public description: string;
	public name: string;
	public tagged: string;
	public done: boolean;

	constructor() {
		this.title = "";
		this.description = "";
		this.name = "";
		this.tagged = "";
		this.done = false;
	}
}