const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

//scraping tools 
const axios = require("axios");
const cheerio = require("cheerio");

//require modals

const db = require("./models");

const PORT = 3000;

//initializing express
const app = express();

//configuring middleware
//morgan for logging request
app.use(logger("dev"));

//parse request body as JSON
app.use(express.json());

//make public folder static
app.use(express.static("public"));

//connect to mongodb
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

mongoose.connect(MONGODB_URI);


//routes

app.get("/scrape"), (req,res) => {

    axios.get("https://www.chicagotribune.com/").then((response) => {
        const $ = cheerio.load(response.data);

        console.log(respone.data)

        $("article h2").each((i, element) => {
            //save empty result as an object
            let result = {};

            //add text and href of each article
            result.title = $(this)
                .children("a")
                .attr("href");

        })
    })
}