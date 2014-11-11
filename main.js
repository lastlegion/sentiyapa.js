var sentiyapa = require("./sentiyapa")

var s = new sentiyapa.Sentiyapa();
s.init();
console.log(s.score("Ganesh Iyer rocks. He is awesome"))
console.log(s.score("you suck jackass!"));
console.log(s.score("Nearly a third of Prime Minister @narendramodi's cabinet charged with crimes http://read.ht/kwQ "));
console.log(s.score("Mr Modi has appointed a minister for homeopathy and other natural therapies. A terrible idea "));
console.log(s.score("Great to see Obama supporting fair and common sense rules to support net neutrality"));