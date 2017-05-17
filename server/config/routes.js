module.exports = function(app){
	app.get('/', function(req, res){
		res.render('pacmanLogin')
	})

	app.post('/login/results', function(req, res){


		res.render('packman-index', {name: req.body.playerName});
		
	})
}