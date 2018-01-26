var mongoose = require("mongoose")
var Schema = mongoose.Schema;

var BucketSchema = new Schema({
	title: String,
	desc: String,
	name: String,
	tagged: String,
	done: Boolean,
}, { timestamps: true })

mongoose.model("Bucket", BucketSchema)