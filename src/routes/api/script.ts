import type { RequestHandler } from '@sveltejs/kit';
// import mongoClient from '$lib/utils/db';
// import { ObjectId } from 'mongodb';
// import {assos} from "../../lib/data/assos";

export const get: RequestHandler = async () => {
	// let sports = (await (await mongoClient).db()?.collection('sports').find({})?.toArray()) || [];
	// await (await mongoClient).db()?.collection('sports2').deleteMany({});
	// await (await mongoClient).db()?.collection('sports2').insertMany(sports);
	//
	// sports.forEach((sport) => {
	//     sport.level = [sport.level]
	// });
	//

	// sports = sports.map(({slots, ...sport}) => ({
	// 	...sport,
	// 	slots: slots.map(({location, ...slot}) => ({
	// 		...slot,
	// 		location: {
	// 			...location,
	// 			_id: typeof location._id === "string" ? new ObjectId(location._id) : location._id
	// 		}
	// 	}))
	// }))
	//
	// sports.forEach(s => s.slots.forEach(sl => console.log(sl.location._id)))
	//
	// await Promise.all(
	//     sports.map(
	//         async (sport) =>
	//             await (await mongoClient)
	//                 .db()
	//                 ?.collection('sports')
	//                 .updateOne({ _id: sport._id }, { $set: sport })
	//     )
	// );
	//
	// await (await mongoClient).db()?.collection('sports').updateMany({}, {$unset: {assoId:1}});

	// console.log(JSON.stringify(sports, null, 2));

	// await (await mongoClient).db()?.collection('associations').insertMany(assos.map(({name, website}) => ({
	//     name, website, role: "unregistered"
	// })));

	return {
		status: 200,
		body: {}
	};
};
