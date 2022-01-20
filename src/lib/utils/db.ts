import { MongoClient } from 'mongodb';

class MongoUtil {
    db: any;
    client: any;

    async init() {
        if (!this.db) {
            console.log(import.meta.env.VITE_MONGO_URI)
            this.client = new MongoClient(
                import.meta.env.VITE_MONGO_URI as string,
                { authSource: import.meta.env.VITE_MONGO_DB as string }
            );
            await this.client.connect();
            this.db = this.client.db(import.meta.env.VITE_MONGO_DB);
        }
    }
}

export default new MongoUtil();