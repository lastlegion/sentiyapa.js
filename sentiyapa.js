var fs = require('fs');

var Sentiyapa = function(){
	this.afinn = __dirname + "/AFINN-111.txt";
	this.wordList = {};
}

Sentiyapa.prototype = {
	constructor: Sentiyapa,
	init: function(){
		var data = fs.readFileSync(this.afinn);
		data = data.toString("utf8");
		var wl = data.split("\n");
		for(i in wl){
			l = wl[i].split("\t");
			this.wordList[l[0]] = l[1]*1
		}
	},
	score: function(text){
		var score = 0;
		var words = text.split(" ");
		var wl = this.a;
		for(var i in words){
			word = words[i];
			if(word in this.wordList){
				score+= this.wordList[word];
			}
		}
		return score/words.length;
	}
};

exports.Sentiyapa = Sentiyapa;


