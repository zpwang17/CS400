
const express = require('express');
const router = express.Router();
const config = require('./config')
const rp = require('request-promise');

// Mongo Related Setting
const mongoose = require('mongoose');
mongoose.connect(config.MONGO_DB_ADDRESS);
var weatherSchema = new mongoose.Schema({
    name: String,
    message: String
})
var Weather = mongoose.model("Weather", weatherSchema)
const MONGO_DB_ADDRESS = config.MONGO_DB_ADDRESS

// default view
const CITY = "Boston"

// build request to communication with third party api
function buildRequestOption(cityName) {
    return {
        method: 'GET',
        uri: "http://api.openweathermap.org/data/2.5/weather?q="+cityName+"&APPID="+config.WEATHER_API_KEY
    }
}

// This function stores retrieved message into MongoDB
function storeInCache(cityName, message) {
    console.log("Storing into db first")

    var newCityInfo = new Weather({name: cityName, message: message})
    return newCityInfo.save((err, newCityInfo) => {
        if (err) return console.error(err)
        console.log("newCityInfo saved")
    })
}

// ask API to get information
function getInfoFromAPI(cityName, requestOptions, res) {
    console.log("Receive from API")
    rp(requestOptions).then(response => {
        // sttore the response in the MongoDB cache
        storeInCache(cityName, response)

        // sending the response
        // in case of caching storing failed, we still send back the response to provide service
        var jsonContent = JSON.parse(response)
        var responseType = "from OpenWeatherMap API"
        res.render('ps6', {MONGO_DB_ADDRESS, jsonContent, responseType})
    }).catch(error => {
        console.error(error)
        responseType = "!500 Internal Server Error!"
        jsonContent = {
            name: responseType,
            coord: {
                lon: responseType,
                lat: responseType
            },
            main: {
                temp: responseType,
                temp_min: responseType,
                temp_max: responseType,
                feels_like: responseType
            }
        }
        res.render('ps6', {MONGO_DB_ADDRESS, jsonContent, responseType})
    })
}

// display cached result
function getInfoFromCache(message, res) {
    console.log("Received from cache")
    var jsonContent = JSON.parse(message)
    var responseType = "from MongoDB cache"
    res.render('ps6', {MONGO_DB_ADDRESS, jsonContent, responseType})
}

// convert city name to upper case so that we only have 1 entry in db
function lookUpCity(city_name, res) {
    city_name = city_name.toUpperCase()
    console.log("start looking for", city_name)
    Weather.find({name: city_name}, (err, response) => {
        console.log("cache response", response)
        if (response.length == 0) {
            // if there is no entry in the mongodb cache
            getInfoFromAPI(city_name, buildRequestOption(city_name), res)
        } else {
            // if data in the mongodb cache
            getInfoFromCache(response[0].message, res)
        }
    })
}

router.get('/', function (req, res, next) {
    lookUpCity(CITY, res)
})

router.post('/lookUp', (request, res) => {
    city_name = request.body.city_name
    lookUpCity(city_name, res)
})

module.exports = router