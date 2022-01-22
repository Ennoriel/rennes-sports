import { Db, MongoClient, MongoClientOptions } from 'mongodb';

class MongoUtil {
	db: Db;
	client: MongoClient;

	async init() {
		if (!this.db) {
			this.client = new MongoClient(
				import.meta.env.VITE_MONGO_URI as string,
				{ useNewUrlParser: true, useUnifiedTopology: true } as MongoClientOptions
			);
			await this.client.connect();
			this.db = this.client.db(import.meta.env.VITE_MONGO_DB as string);
		}
	}
}

export default new MongoUtil();
