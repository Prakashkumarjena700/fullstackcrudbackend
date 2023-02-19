const express = require("express")

const { postModel } = require("../models/post.model")

const postRoute = express.Router()

postRoute.get("/", async (req, res) => {
    try {
        const data = await postModel.find()
        res.send(data)
    } catch (err) {
        res.send("Can't add post")
    }

})

postRoute.get("/:_id", async (req, res) => {
    const { _id } = req.params
    try {
        const data = await postModel.find({ _id })
        res.send(data[0])
    } catch (err) {
        res.send({ "msg": "Not found" })
    }
})

postRoute.post("/", async (req, res) => {
    try {
        const post = new postModel(req.body)
        await post.save()
        res.send("Post added sucessfully")
    } catch (err) {
        res.send("Post not added")
    }
})

postRoute.patch("/:_id", async (req, res) => {
    const payload = req.body
    const { _id } = req.params
    try {
        await postModel.findByIdAndUpdate({ _id }, payload)
        res.send({ "msg": "Post has been updated" })

    } catch (err) {
        res.send("Can't updated")
    }
})

postRoute.delete("/:_id", async (req, res) => {
    const { _id } = req.params
    try {
        await postModel.findByIdAndDelete({ _id })
        res.send({ "msg": "Post has been deletee" })

    } catch (err) {
        res.send("Can't updated")
    }
})

module.exports = {
    postRoute
}