const express = require('express');

const app = express();

if (!process.env.DETA_RUNTIME) {
	app.listen(8080, console.log.bind(globalThis, '[i] Ran at 8080'));
} else {
	module.exports = app;
}
