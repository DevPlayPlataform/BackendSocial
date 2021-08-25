const PostSchema = require('../models/post')

const postController = {}

postController.create = (req, res) => {
    if(!req.body.author || !req.body.content || !req.body.theme, !req.body.tittle){
        return res.status(500).json({
            success: true, 
            message: "Some data is missing"
        })
    }

    const post = {
        author: req.body.author, 
        content: req.body.content, 
        theme: req.body.theme, 
        isDeleted: false, 
        like: 0, 
        unlyke: 0
    }

    PostSchema.create(post)
        .then(result => {
            return res.status(200).json({
                success: true, 
                message: "Post Created",
                data: result
            })
        })
        .catch(err => {
            console.log(err)
            return res.status(500).json({
                success: false, 
                message: "Somthing was wrong"
            })
        })
    
}

postController.edit = (req, res) => {
    if(!req.body.postId || (!req.body.content && !req.body.theme && !req.body.title)){
        return res.status(500).json({
            success: true, 
            message: "Some data is missing"
        })
    }

    PostSchema.findById(req.body.postId)
        .then(data => {
            if(!data){
                return res.status(500).json({
                    success: false, 
                    message: "This post doesn´t exist"
                })
            }

            data.content = req.body.content ? req.body.content : data.content
            data.theme = req.body.theme ? req.body.theme : data.theme
            data.title = req.body.title ? req.body.title : data.title

            data.save(data)

            return res.status(200).json({
                success: true, 
                data: data
            })
        })
        .catch(err => {
            console.log(err)
            return res.status(500).json({
                success: false, 
                message: "Somthing was wrong"
            })
        })
}

postController.delete = (req, res) => {
    if(!req.body.postId){
        return res.status(500).json({
            success: true, 
            message: "Some data is missing"
        })
    }

    PostSchema.findByIdAndDelete(req.body.postId)
        .then(result => {
            return res.status(200).json({
                success: true, 
                message: "Post Deleted"
            })
        })
        .catch(err => {
            console.log(err)
            return res.status(500).json({
                success: false, 
                message: "Somthing was wrong"
            })
        })
    
}

module.exports = postController