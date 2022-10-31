const express = require('express');

const app = express();

app.use(express.static('public/dist/'));

if (!process.env.DETA_RUNTIME) {
	app.listen(8080, console.log.bind(globalThis, '[i] Ran at 8080'));
} else {
	module.exports = app;
}
