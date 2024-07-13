import express from "express";
import bodyParser from "body-parser";
import { getBlogs, addBlog } from "./blogs.js"


const app = express();
const port = 3000;
var blogList = []

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

function fetchBlogList(req,res,next){
    blogList = getBlogs();
    next();
}

app.use(fetchBlogList);

app.get("/",(req,res) =>{
    res.render("index.ejs",{
        blogs: blogList
        })
});

app.get("/about",(req,res) =>{
    res.render("about.ejs")
});

app.get("/create",(req,res) =>{
    res.render("create.ejs")
});

app.get("/blog/:id",(req,res) => {
    res.render("blog.ejs",{
        title: blogList[req.params.id].title,
        content: blogList[req.params.id].content
    })
})

app.post("/submit",(req,res) => {
    console.log(req.body["heading"])
    addBlog({
        id: blogList.length,
        title: req.body["heading"],
        content: req.body["text"]
    })
    res.status(201).render("create.ejs");
});


app.listen(port,() => {
    console.log(`Server is running on port ${port}`);
});