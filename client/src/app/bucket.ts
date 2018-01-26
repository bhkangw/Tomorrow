export class Bucket {
	public title: string;
	public desc: string;
	public name: string;
	public tagged: string;
	public done: boolean;

	constructor() {
		this.title = "";
		this.desc = "";
		this.name = "";
		this.tagged = "";
		this.done = false;
	}
}