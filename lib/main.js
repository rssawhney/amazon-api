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
                savings: '',
                images: [],
                availability: '',
                merchantInfo: '',
                offers: '',
                productDescription: '',
                productTechnicalDetails: '',

            };
            const wrapper = page('.feature');
            const wrapperCategory = page('.nav-sprite-v1');
            const wrapperTechnical = page('.container');
            appData.productTitle = wrapper.find("[id=productTitle]").text().trim();
            appData.brand = wrapper.find("[id=brand]").text().trim();
            appData.category = wrapperCategory.find("[id=nav-subnav]").children().first().text();
            appData.price = wrapper.find("[id=priceblock_ourprice]").text().trim() || wrapper.find("[id=priceblock_saleprice]").text().trim();
            appData.maxPrice = wrapper.find("span.a-text-strike").text().trim();
            appData.savings = wrapper.find("[id=regularprice_savings]").text().replace(/\t/g, '').replace(/\n/g, '').trim().split(' ')[2];
            page('.a-button-text').each(function () {
                appData.images.push(page(this).children().first().attr('src'));
            });
            appData.images = appData.images.filter(function (x) {
                return x;
            });
            appData.availability = wrapper.find("[id=availability]").text().trim();
            appData.merchantInfo = wrapper.find("[id=merchant-info]").text().replace(/\s\s+/g, '').trim();
            appData.offers = wrapper.find('.olp-padding-right').text().trim();
            appData.productDescription = wrapper.find("[id=productDescription]").text().replace(/\s\s+/g, '').trim();
            appData.productTechnicalDetails = wrapperTechnical.find(".attrG").text().replace(/\n/g, ' ').replace(/\s\s+/g, ' ').trim();


            res.send(appData);
        }
    });
});


var port = process.env.PORT || 8000;
app.listen(port);