"use strict";

var _express = _interopRequireDefault(require("express"));

var _routes = require("./routes");

var _path = _interopRequireDefault(require("path"));

var _cors = _interopRequireDefault(require("cors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
app.use(_express.default.json());
app.use((0, _cors.default)());
app.set(" view engine", "ejs");
app.use(_express.default.static("src/public"));
app.use("/static", _express.default.static(_path.default.join(__dirname, "public")));
app.use(_express.default.urlencoded());
app.use(_routes.router);
app.listen(3000, () => {
  console.log('iniciado...');
});