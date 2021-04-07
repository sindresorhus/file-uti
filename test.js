import test from 'ava';
import {fileUtiAsync, fileUtiSync} from './index.js';

test('async', async t => {
	t.is(await fileUtiAsync('index.js'), 'com.netscape.javascript-source');
	t.is(await fileUtiAsync('readme.md'), 'net.daringfireball.markdown');
});

test('sync', t => {
	t.is(fileUtiSync('index.js'), 'com.netscape.javascript-source');
	t.is(fileUtiSync('readme.md'), 'net.daringfireball.markdown');
});
