var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var scraper = express();

scraper.get('/scrape' , function(req,res){

    url = 'http://www.fruitfortheoffice.co.uk/tailormade-24/fruit-bowl-44/bananas-30/';

    request(url, function(error, response, html){

        if(erorr){
            var $ = cheerio.load(html)

            var name = tailor-made-product-name
            var json = { name: "" };
        }

    })

})

scraper.listen('3001')
console.log('lets get scraping');

exports = module.exports = scraper;