import type { ObjectId } from 'mongodb';

export type InsertOneReturnType = {
	acknowledged: boolean;
	insertedId: ObjectId;
};

export type DeleteResultType = {
	acknowledged: boolean;
	deletedCount: number;
};
