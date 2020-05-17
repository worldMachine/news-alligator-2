// var mongoose = require("mongoose"),
//   Schema = mongoose.Schema;

// var ArticleSchema = new Schema(
//   {
//     title: { type: String, required: true },
//     url: { type: String, required: true, unique: true },
//     imageUrl: { type: String, required: true },
//     publisher: { type: String },
//     publisherId: { type: Number },
//     author: { type: String },
//     description: { type: String },
//     text: { type: String },
//     pubDate: { type: Date },
//     category: [{ type: String }],
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model("Article", ArticleSchema);

var mongoose = require("mongoose"),
  Schema = mongoose.Schema;

var ArticleSchema = new Schema(
  {
    title: { type: String, required: true },
    link: { type: String, required: true },
    imageLink: { type: String, required: true },
    guid: { type: String, required: true, unique: true },
    publisher: { type: String },
    publisherId: { type: Number },
    author: { type: String },
    description: { type: String },
    body: { type: String },
    pubDate: { type: Date },
    categories: [{ type: String }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Article", ArticleSchema);
