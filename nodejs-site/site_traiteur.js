var express = require('express');
const bodyParser = require('body-parser');

var services = require('./traiteur');

var app = express(); 

app.use(bodyParser());
app.use('/', express.static(__dirname+"/static/"));

app.get('/menus', function(req, res) { 
	var reponse = services.liste_plat();
	res.send(reponse); 
});

app.get('/menu/:plat_id', function(req, res) { 
	var reponse = services.info_plat(req.params.plat_id);
	res.send(reponse); 
});


app.post('/menu/commande', function(req, res) { 
	var reponse = services.commande_plat(req.body.plat_id);
	res.send(reponse);
});


app.listen(process.env.PORT || 8000);
