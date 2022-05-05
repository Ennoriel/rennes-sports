import type { RequestHandler } from '@sveltejs/kit';
import mongoClient from "$lib/utils/db";
import { ObjectId } from 'mongodb';
import {getMarkers} from "$lib/utils/filter";
import type {Sport} from "$lib/types/sport.type";
import type {Location} from "$lib/types/location.type";
import type { WithId } from 'mongodb'

type DSport = WithId<Document> & Sport;


export const get: RequestHandler = async () => {

    const locations = await (await mongoClient).db()?.collection('locations').find().toArray() || [];

    if (locations) {
        const sports = await (await mongoClient).db()?.collection('sports').find().toArray() || [];
        const markers = getMarkers(sports as any, locations as any);

        return {
            body: { markers }
        };
    }

    return {
        status: 404
    };
};