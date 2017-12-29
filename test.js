import test from 'ava';
import m from '.';

test('async', async t => {
	t.is(await m('index.js'), 'com.netscape.javascript-source');
	t.is(await m('readme.md'), 'net.daringfireball.markdown');
});

test('sync', t => {
	t.is(m.sync('index.js'), 'com.netscape.javascript-source');
	t.is(m.sync('readme.md'), 'net.daringfireball.markdown');
});
