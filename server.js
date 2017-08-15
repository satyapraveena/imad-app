var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles = {
 'article_one' : {
    title: "article_one",
    heading:"First Article",
    link1 :"/",
    link2:"/article_two",
    content : `
    <div>
        <p>welcome to imad..you are going to experience the coding world</p>
    </div>
    <div>Aug 8,2017</div>`
},
'article_two' : {
    title: "article_two",
    heading:"Second Article",
    link1 :"/article_one",
    link2:"/article_three",
    content : `
    <div>
        <p>Let us start..this is a html file which can be understood by browser</p>
    </div>
    <div>Aug 8,2017</div>`
},
'article_three' : {
    title: "article_three",
    heading:"Third Article",
    link1 :"/article_two",
    link2:"/",
    content : `
    <div>
        <p>css file is to style the content to be displayed</p>
    </div>
    <div>Aug 8,2017</div>`
}
}
var display = function(obj){
    var title = obj.title;
    var heading = obj.heading;
    var link1 = obj.link1;
    var link2 = obj.link2;
    var content = obj.content;
var template = `<html>
    <head>
        <title>
            ${title}
        </title>
        <meta name = "viewport" content = "width-divice-width , initial-scale=1"/>
        <link href="ui/style.css" rel = "stylesheet"/>
    </head>
<body>
    <div class="container">
    <div>
        <h1> ${heading}</h1>
        <a href=${link1}>Home</a>
        <a href = ${link2}>Next</a>
    </div>
    ${content}
    </div>
</body>
</html>`
return template;
};
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
app.get('/:articleName', function (req, res) {
    var articleName = req.params.articleName;
  res.send(display(articles[articleName]));
});
//app.get('/article_one',function(req,res)
//{
// res.send(display(articles));
//});
//app.get('/article_two',function(req,res)
//{
//  res.sendFile(path.join(__dirname,'ui','article_two.html'));
//});
//app.get('/article_three',function(req,res)
//{
//  res.sendFile(path.join(__dirname,'ui','article_three.html'));
//});
// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
