import test from 'ava';
import archiveExtensions from '.';

test('main', t => {
	t.true(Array.isArray(archiveExtensions));
	t.true(archiveExtensions.length > 0);
});
