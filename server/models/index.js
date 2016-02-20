var mongoose = require("mongoose");
mongoose.connect(process.env.MONGOLAB_URI || "mongodb://localhost/va_Hack_App");
mongoose.set("debug",true);

module.exports.User = require("./user");
// module.exports.Log = require("./log");
// module.exports.Forecast = require("./forecast");