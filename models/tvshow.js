exports = module.exports = function(app, mongoose) {

	var tvshowSchema = new mongoose.Schema({
		marca: 		{ type: String },
		precio: 		{ type: Number },
		material: 	{ type: String },
		tipo:  	{ type: String }
	});

	mongoose.model('TVShow', tvshowSchema);

};
