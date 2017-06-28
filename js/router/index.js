"use strict";

module.exports = function(app,server) {
		 app.use("/node", require("./routes/node")());
		 app.use("/node/ex1", require("./routes/ex1")());
		 app.use("/node/ex2", require("./routes/ex2")());		 
};