//File: controllers/tvshows.js
var mongoose = require('mongoose');
var TVShow  = mongoose.model('TVShow');

//GET - Return all tvshows in the DB
exports.findAllTVShows = function(req, res) {
	TVShow.find(function(err, tvshows) {
    if(err) res.send(500, err.message);

    console.log('GET /tvshows')
		res.status(200).jsonp(tvshows);
	});
};

//GET - Return a TVShow with specified ID
exports.findById = function(req, res) {
	TVShow.findById(req.params.id, function(err, tvshow) {
    if(err) return res.send(500, err.message);

    console.log('GET /tvshow/' + req.params.id);
		res.status(200).jsonp(tvshow);
	});
};

//POST - Insert a new TVShow in the DB
exports.addTVShow = function(req, res) {
	console.log('POST');
	console.log(req.body);

	var tvshow = new TVShow({
		marca:    req.body.marca,
		precio: 	  req.body.precio,
		material:  req.body.material,
		tipo:   req.body.tipo
	});

	tvshow.save(function(err, tvshow) {
		if(err) return res.send(500, err.message);
    res.status(200).jsonp(tvshow);
	});
};

//PUT - Update a register already exists
exports.updateTVShow = function(req, res) {
	TVShow.findById(req.params.id, function(err, tvshow) {
		tvshow.marca   = req.body.petId;
		tvshow.precio    = req.body.precio;
		tvshow.material = req.body.material;
		tvshow.tipo     = req.body.tipo;

		tvshow.save(function(err) {
			if(err) return res.send(500, err.message);
      res.status(200).jsonp(tvshow);
		});
	});
};

//DELETE - Delete a TVShow with specified ID
exports.deleteTVShow = function(req, res) {
	TVShow.findById(req.params.id, function(err, tvshow) {
		tvshow.remove(function(err) {
			if(err) return res.send(500, err.message);
      res.status(200);
		})
	});
};
