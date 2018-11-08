//gọi tới module express
var express = require('express');
//khoi tao doi tuong
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true });

var sinhvienRouter = require('./routes/sv-route');
var apiRouteList = require('./api/routes/sv-route');

app.use(express.static("public")); // vào đây để tìm file
app.use(bodyParser.json());
app.use(urlencodedParser);

app.set("view engine", "pug");
app.set("views", "./views");
//lang nghe cong 3000
app.listen(3000, function() {
	console.log("Connected");
});

app.use('/sinhvien', sinhvienRouter);
app.use('/api', apiRouteList);

app.get('/', function(req, res){
  //tra ket qua cho client
  res.render("main");
});