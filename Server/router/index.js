// Uitwerking film toevoegen via een formulier op de website

var router = require('express').Router();
var films = require('../data/films.json');

// Een POST-request verwerken om nieuwe film toe te voegen
var film = [];
var filmsAdd = films;
router.post('/api/addfilm', function (req, res) {
	
	// verwerk binnenkomende request. We gaan er van uit
	// dat de parameters 'Titel', 'Auteur' en 'Jaar' aanwezig zijn.
	film.Titel = req.body.titel;
	film.Auteur = req.body.auteur;
	film.Jaar = req.body.jaar;
	
	//OPMERKING: Als ik console.log(film.Titel) doe, dan krijg ik gewoon de waardes door maar ze komen leeg op de view terecht.
	
	// dynamisch nieuwe ID uitrekenen en film-object samenstellen.
	film.Id = filmsAdd.length + 1;
  
    // push naar de array
	filmsAdd.push(film);
	
	//console.log(filmsAdd[4]);

	// Echo de nieuwe films naar de client zodat ze verwerkt kunnen worden.	
	res.json(filmsAdd);
});

// Retourneer films
router.get('/api/films', function (req, res) {
	console.log('Films opgevraagd');
	res.json(films);
});

// 4. DELETE-endpoint: boek verwijderen uit het JSON object.
router.delete('/api/deletefilm/:id', function (req, res, next) {
	//Een of ander command om een waarde uit de array te verwijderen.
	
});

module.exports = router;