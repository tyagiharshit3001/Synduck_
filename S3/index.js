const express = require("express");
const app = express();
const path = require("path");

app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, 'js')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')));
app.use('/images',express.static(path.join(__dirname, 'images')));
app.use('/fonts',express.static(path.join(__dirname, 'fonts')));

//app.use(express.static('public'));
app.get('/', function(req, res){
    res.charset = 'utf-8'
    res.sendFile("index.html", {root: __dirname});
});
const port = 3001;

app.get('/blog.html', function(req, res){
    res.charset = 'utf-8'
    res.sendFile("blog.html", {root: __dirname});
    console.log("Blog Page on S3");
});

app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
});

