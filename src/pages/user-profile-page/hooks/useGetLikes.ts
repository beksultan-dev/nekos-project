/* eslint-disable react-hooks/exhaustive-deps */
import { db } from "@/shared/config/firebase-config";
import { DocumentData, collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useGetAuthUser } from "../../../shared/hooks/useGetAuthUser";

export type Data = {
	data: DocumentData;
	id: string;
};

export const useGetLikes = () => {
	const user = useGetAuthUser();
	const [likes, setLikes] = useState<Data[]>();

	const likesRef = collection(db, "likes");

	const docs: Data[] = [];

	const getData = async () => {
		const q = query(
			likesRef,
			where("userId", "==", user?.userId),
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
		if (user) {
			getData();
		}
	}, []);

	return { likes, getData, docs };
};
