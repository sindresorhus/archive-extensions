'use strict';
var test = require('ava');
var archiveExtensions = require('./');

test(function (t) {
	t.assert(Array.isArray(archiveExtensions));
	t.assert(archiveExtensions.length > 0);
	t.end();
});
