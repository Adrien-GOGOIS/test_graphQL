import * as fs from "fs";

export default class DatabaseService {
	JSON_FILE_PATH;

	constructor(path) {
		this.JSON_FILE_PATH = path
	}

	async updateDatabase(data) {
		try {
			fs.writeFileSync(this.JSON_FILE_PATH, JSON.stringify(data), 'utf8');
		} catch(error) {
			throw new Error('Something wrong happened writing file : ', error)
		}
	}
}