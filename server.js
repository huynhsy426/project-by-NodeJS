const express = require('express');
const session = require('express-session');
const app = express();

const configViewEngine = require('./web/config/viewEngine');
const loginRouter = require('./web/routes/projectRouter');



var dirName = __dirname;
configViewEngine(app, session, dirName);

app.use("/project", loginRouter);

app.listen(8081);
console.log('Listening on port 8081');