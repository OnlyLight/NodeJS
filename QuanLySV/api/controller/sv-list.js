var pool = require('../../dbUtils');

module.exports.list = function (req, res) {
	pool.connect((err, client, done) => {
		if (err) throw err

	  	client.query('SELECT * FROM sinhvien ORDER BY id', (err, result) => {
		    done();

		    if (err) {
		    	res.end();
		      	console.log(err.stack);
		    } else {
		      	res.json(result.rows);
		    }
	  	});
	});
};

module.exports.listID = function (req, res) {
	pool.connect((err, client, done) => {
		if (err) throw err

		var id = req.params.id;
	  	client.query('SELECT * FROM sinhvien WHERE id='+id+'', (err, result) => {
		    done();

		    if (err) {
		    	res.end();
		      	console.log(err.stack);
		    } else {
		      	res.json(result.rows);
		    }
	  	})
	});
};

module.exports.create = function(req, res){
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
		    	res.json({message: 'Insert Success !!'});
		    }
	  	})
	});
};

module.exports.update = function (req, res) {
	pool.connect((err, client, done) => {
	var id = req.params.id;
 	var hoten = req.body.hoten;
  	var email = req.body.email;

	if (err) throw err

	  	client.query("update sinhvien set hoten='"+hoten+"', email='"+email+"' WHERE id = "+id+"", (err, result) => {
		    done();

		    if (err) {
		    	res.end();
		      	console.log(err.stack);
		    } else {
		    	res.json({message: 'Update Success !!'});
		    }
	  	})
	});
};

module.exports.delete = function (req, res) {
	pool.connect((err, client, done) => {
		if (err) throw err

		var id = req.params.id;
	  	client.query("DELETE FROM sinhvien WHERE id = "+id+"", (err, result) => {
		    done();

		    if (err) {
		    	res.end();
		      	console.log(err.stack);
		    } else {
		      	res.json({message: 'Delete Success !!'});
		    }
	  	})
	});
};

module.exports.search = function (req, res) {
	pool.connect((err, client, done) => {
		if (err) throw err

		var search = req.query.search;
	  	client.query("SELECT * FROM sinhvien WHERE hoten LIKE '%"+search+"%'", (err, result) => {
		    done();

		    if (err) {
		    	res.end();
		      	console.log(err.stack);
		    } else {
		      	res.json(result.rows);
		    }
	  	})
	});
}

module.exports.searchEmail = function (req, res) {
	pool.connect((err, client, done) => {
		if (err) throw err

		var search = req.query.search;
	  	client.query("SELECT * FROM sinhvien WHERE email LIKE '%"+search+"%'", (err, result) => {
		    done();

		    if (err) {
		    	res.end();
		      	console.log(err.stack);
		    } else {
		      	res.json(result.rows);
		    }
	  	})
	});
}

module.exports.filter = function (req, res) {
	pool.connect((err, client, done) => {
		if (err) throw err

		var ac = req.query.active;
	  	client.query("SELECT * FROM sinhvien WHERE active = '"+ac+"'", (err, result) => {
		    done();

		    if (err) {
		    	res.end();
		      	console.log(err.stack);
		    } else {
		      	res.json(result.rows);
		    }
	  	})
	});
}