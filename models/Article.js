const mongoose = require("mongoose");

//saving reference to the Schema constructor

const Schema = mongoose.Schema;

let ArticleSchema = new Schema({

    title: {
        type: String,
        required: true
    },

    summary: {
        type: String,
        required: true
    },

    link: {
        type: String,
        required: true
    },

    comment: {
        type: Schema.Types.ObjectId,
        ref: "Comment"
    },
});

const Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;