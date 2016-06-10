'use strict';

const express = require('express');
const request = require('request');
const app = express();
const fs = require('fs');
const cheerio = require('cheerio');
const debug = require('debug')('api');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.send('An Amazon.in scraper written by rssawhney');
});

const AMAZON_URL = 'http://www.amazon.in/gp/product/';

app.get('/api', function (req, res) {
    var scrapeUrl = AMAZON_URL;
    debug('Incoming request ', req.query.product);
    scrapeUrl = scrapeUrl + req.query.product;
    request(scrapeUrl, function (err, response, html) {
        if (err) {
            debug('Error in request ', scrapeUrl);
        } else {
            const page = cheerio.load(html);
            const appData = {
                productTitle: '',
                brand: '',
                category: '',
                price: '',
                maxPrice: '',
                savings: ''

            };
            const wrapper = page('.feature');
            appData.productTitle = wrapper.find("[id=productTitle]").text().trim();
            appData.brand = wrapper.find("[id=brand]").text().trim();
            appData.category = wrapper.find("[id=nav-subnav]").text().trim();
            console.log(appData.category);
            appData.price = wrapper.find("[id=priceblock_ourprice]").text().trim() || wrapper.find("[id=priceblock_saleprice]").text().trim();
            appData.maxPrice = wrapper.find("span.a-text-strike").text().trim();
            appData.savings = wrapper.find("[id=regularprice_savings]").text().replace(/\t/g, '').replace(/\n/g, '').trim().split(' ')[2];


            // appData.icon = wrapper.find(".cover-image").attr("src");
            // appData.author = wrapper.find("[itemprop=author] [itemprop=name]").text().trim();
            // appData.authorUrl = wrapper.find(".meta-info .dev-link").attr("href");
            // appData.appSize = wrapper.find("[itemprop=fileSize]").text().trim();
            // appData.supportedDevices = wrapper.find("[itemprop=operatingSystems]").text().trim();
            // appData.version = wrapper.find("[itemprop=softwareVersion]").text().trim();
            // appData.category = wrapper.find("[itemprop=genre]").text().trim();
            // appData.downloads = wrapper.find("[itemprop=numDownloads]").text().replace(/,/g, '').trim();
            // appData.lastUpdated = wrapper.find("[itemprop=datePublished]").text().trim();
            // appData.contentRating = wrapper.find("[itemprop=contentRating]").text().trim();
            // appData.price = wrapper.find(".details-actions button.price").text().trim();

            res.send(appData);
        }
    });
});


var port = process.env.PORT || 8000;
app.listen(port);