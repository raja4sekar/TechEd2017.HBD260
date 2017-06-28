"use strict";

module.exports = function(app, server) {
	app.use("/node", require("./routes/node")());
	app.use("/node/ex1", require("./routes/ex1")());
	app.use("/node/ex2", require("./routes/ex2")());
	app.use("/node/JavaScriptBasics", require("./routes/JavaScriptBasics")());
	app.use("/node/excAsync", require("./routes/exerciseAsync")(server));
	app.use("/node/textBundle", require("./routes/textBundle")());
	app.use("/node/excel", require("./routes/excel")());
	app.use("/node/xml", require("./routes/xml")());
	app.use("/node/zip", require("./routes/zip")());
};