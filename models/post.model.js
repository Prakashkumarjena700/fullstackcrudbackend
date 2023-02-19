const mongoose = require("mongoose")

const postSchema = mongoose.Schema({
    name: String,
    brand: String,
    price: Number,
    img: String
})

const postModel = mongoose.model("posts", postSchema)

module.exports = {
    postModel
}