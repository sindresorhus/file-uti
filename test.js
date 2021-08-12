import test from 'ava';
import {fileUti, fileUtiSync} from './index.js';

test('async', async t => {
	t.is(await fileUti('index.js'), 'com.netscape.javascript-source');
	t.is(await fileUti('readme.md'), 'net.daringfireball.markdown');
});

test('sync', t => {
	t.is(fileUtiSync('index.js'), 'com.netscape.javascript-source');
	t.is(fileUtiSync('readme.md'), 'net.daringfireball.markdown');
});
