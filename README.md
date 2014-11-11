sentiyapa.js
============

A quickfix sentiment analyzer written in javascript. Uses AFINN(http://www2.imm.dtu.dk/pubdb/views/publication_details.php?id=6010) word list to compute scores in a give text string. 

### Installation
Run ```npm install sentiyapa``` to install the package

### Usage
```
var s = new sentiyapa.Sentiyapa();
s.init(); //initialize sentiyapa
```
Now to compute sentiment score for a given string use:
```
s.score("your text here")
```
This function will return a number. Positive numbers indicate a positive sentiment and negative numbers indicate negative sentiments. The |number| indicates the extent of the sentiment.