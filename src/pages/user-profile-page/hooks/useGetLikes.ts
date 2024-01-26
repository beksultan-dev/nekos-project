/* eslint-disable react-hooks/exhaustive-deps */
import { db } from "@/shared/config/firebase-config";
import { useAppSelector } from "@/store/hooks/hooks";
import { DocumentData, collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";

export type Data = {
	data: DocumentData;
	id: string;
};

export const useGetLikes = () => {
	const { currentUser } = useAppSelector((state) => state.userPreferenses);
	const [likes, setLikes] = useState<Data[]>();

	const likesRef = collection(db, "likes");

	const docs: Data[] = [];

	const getData = async () => {
		const q = query(
			likesRef,
			where("userId", "==", currentUser?.userId),
			orderBy("createdAt", "desc"),
		);

		const querySnapshot = await getDocs(q);
		querySnapshot.forEach((doc) => {
			docs.push({
				data: doc.data(),
				id: doc.id,
			});
		});

		setLikes(docs);
	};

	useEffect(() => {
		if (currentUser) {
			getData();
		}
	}, []);

	return { likes, getData, docs };
};
