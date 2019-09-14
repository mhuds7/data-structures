//npm install cheerio

var fs = require('fs');
var cheerio = require('cheerio');

//load the thesis text file into a variable, 'content'
// this is the file that we created in the starter code from last week
var content = fs.readFileSync('../data/m07 .txt');

//load 'content' into a cheerio object
var $ = cheerio.load(content);

//print (to the console) names of addresses
$('tr tr tr').each(function(i, elem) {
    console.log($(elem).children().first().text().trim());
});

// write addresses to a text file
var addresses = ''; // this variable will hold the lines of text

$('tr').each(function(i, elem) {
    addresses += ($(elem).text()).trim() + '\n';
});

fs.writeFileSync('w02addresses.txt', addresses);