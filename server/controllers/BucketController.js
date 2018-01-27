var mongoose = require("mongoose");
var Bucket = mongoose.model("Bucket");

module.exports = {
	login: function(req,res){
		console.log("in controller", req.body);
		req.session.user = req.body.name;
		return res.json(req.session.user)
	},
	
	checkSess: function (req, res) {
		if (req.session.user == undefined) {
			console.log("check session:", req.session.user)
			return res.json(null)
		}
		return res.json(req.session.user);
	},

  	logout: function(req,res){
		req.session.destroy();
		res.redirect("/");
	 },
	 
	addBucket: function (req, res) {
		console.log("name!!", req.body.name)
		Bucket.create({ name: req.body.name, title: req.body.title, description: req.body.description, tagged: req.body.tagged, done: false}, function (err, bucket) {
			console.log("Created!!!!")
			Bucket.find({}).sort("-createdAt").exec(function (err, buckets) {
				return res.json(buckets);
			})
		})
	},

	changeStatus: function (req, res) {
		console.log("id", req.body)
		Bucket.findByIdAndUpdate(req.body.id, { $set: { done: "true" }}, function(err, bucket){
			console.log("found!!!", bucket)
		})
	},

	showAll: function (req, res) {
		Bucket.find({}).sort("-createdAt").exec(function (err, buckets) {
			return res.json(buckets);
		})
	},

	logout: function (req, res) {
		req.session.destroy();
		res.redirect("/");
	},
}
