import type { RequestHandler } from '@sveltejs/kit';
// import mongoClient from '$lib/utils/db';
// import { ObjectId } from 'mongodb';
// import {assos} from "../../lib/data/assos";

export const get: RequestHandler = async () => {
	// const sports = (await (await mongoClient).db()?.collection('sports').find({})?.toArray()) || [];
	// await (await mongoClient).db()?.collection('sports2').deleteMany({});
	// await (await mongoClient).db()?.collection('sports2').insertMany(sports);
	//
	// sports.forEach((sport) => {
	//     const asso = assos.find((a) => a.id === sport.assoId);
	//     console.log(asso)
	//     sport.association = {
	//         _id: new ObjectId(asso._id),
	//         name: asso.name,
	//         website: asso.website,
	//     }
	//     sport.associationId = undefined;
	// });
	//
	// // await Promise.all(
	// //     sports.map(
	// //         async (sport) =>
	// //             await (await mongoClient)
	// //                 .db()
	// //                 ?.collection('sports')
	// //                 .updateOne({ _id: sport._id }, { $set: sport })
	// //     )
	// // );
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
