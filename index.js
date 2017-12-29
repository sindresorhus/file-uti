'use strict';
const util = require('util');
const childProcess = require('child_process');

const execFileP = util.promisify(childProcess.execFile);

module.exports = async filePath => {
	const {stdout} = await execFileP('mdls', ['-raw', '-name', 'kMDItemContentType', filePath]);
	return stdout.trim();
};

module.exports.sync = filePath => childProcess.execFileSync('mdls', ['-raw', '-name', 'kMDItemContentType', filePath], {encoding: 'utf8'}).trim();
