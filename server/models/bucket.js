var mongoose = require("mongoose")
var Schema = mongoose.Schema;

var BucketSchema = new Schema({
	title: String,
	description: String,
	name: String,
	tagged: String,
	done: Boolean,
}, { timestamps: true })

mongoose.model("Bucket", BucketSchema)