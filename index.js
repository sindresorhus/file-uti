import {promisify} from 'util';
import childProcess from 'child_process';

const execFileP = promisify(childProcess.execFile);

export async function fileUtiAsync(filePath) {
	const {stdout} = await execFileP('mdls', ['-raw', '-name', 'kMDItemContentType', filePath]);
	return stdout.trim();
}

export function fileUtiSync(filePath) {
	return childProcess.execFileSync('mdls', ['-raw', '-name', 'kMDItemContentType', filePath], {encoding: 'utf8'}).trim();
}
