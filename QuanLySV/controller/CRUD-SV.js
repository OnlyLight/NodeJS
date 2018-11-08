var pool = require('../dbUtils');

module.exports.list = function (req, res) {
	pool.connect((err, client, done) => {
		if (err) throw err

	  	client.query('SELECT * FROM sinhvien ORDER BY id', (err, result) => {
		    done();

		    if (err) {
		    	res.end();
		      	console.log(err.stack);
		    } else {
		    	var page = parseInt(req.query.page) || 1;
		    	var perPage = 3;

		    	var begin = (page - 1) * perPage;
		    	var end = page * perPage;

		    	var total = (result.rows.length) / perPage;
		    	var arrIndex = [];
		    	for(var i = 1; i <= total + 1; i++) {
		    		arrIndex.push(i);
		    	}
		    	console.log(result.rows);
		      	res.render("sinhvien_list", {danhsach:result.rows.slice(begin, end), indexs: arrIndex});
		    }
	  	})
	});
};

module.exports.themGet = function(req, res){
  // show view
  res.render("sinhvien_insert");
}

module.exports.themPost = function(req, res){
  // insert DB

  // Query DB
  pool.connect((err, client, done) => {
 	var hoten = req.body.hoten;
  	var email = req.body.email;

	if (err) throw err

	  	client.query("insert into sinhvien(hoten, email) values ('"+hoten+"', '"+email+"')", (err, result) => {
		    done();

		    if (err) {
		    	res.end();
		      	console.log(err.stack);
		    } else {
		    	res.redirect("list");
		    }
	  	})
	});
};

module.exports.suaGet = function (req, res) {
	pool.connect((err, client, done) => {
		if (err) throw err

		var id = req.params.id;
	  	client.query("SELECT * FROM sinhvien WHERE id = "+id+"", (err, result) => {
		    done();

		    if (err) {
		    	res.end();
		      	console.log(err.stack);
		    } else {
		      	res.render("sinhvien_edit", {sv : result.rows[0]});
		    }
	  	})
	});
};

module.exports.suaPost = function (req, res) {
	pool.connect((err, client, done) => {
	var id = req.body.id;
 	var hoten = req.body.hoten;
  	var email = req.body.email;

	if (err) throw err

	  	client.query("update sinhvien set hoten='"+hoten+"', email='"+email+"' WHERE id = "+id+"", (err, result) => {
		    done();

		    if (err) {
		    	res.end();
		      	console.log(err.stack);
		    } else {
		    	res.redirect("list");
		    }
	  	})
	});
};

module.exports.xoa = function (req, res) {
	pool.connect((err, client, done) => {
		if (err) throw err

		var id = req.params.id;
	  	client.query("DELETE FROM sinhvien WHERE id = "+id+"", (err, result) => {
		    done();

		    if (err) {
		    	res.end();
		      	console.log(err.stack);
		    } else {
		      	res.redirect("../list");
		    }
	  	})
	});
};