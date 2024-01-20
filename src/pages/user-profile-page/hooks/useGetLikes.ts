/* eslint-disable react-hooks/exhaustive-deps */
import { db } from "@/config/firebase-config";
import {
	DocumentData,
	collection,
	getDocs,
	orderBy,
	query,
	where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { useGetAuthUser } from "../../../hooks/useGetAuthUser";

type Data = {
	data: DocumentData;
	id: string;
};

export const useGetLikes = () => {
	const [likes, setLikes] = useState<Data[]>();
	const likesRef = collection(db, "likes");
	const data = useGetAuthUser();
	const docs: Data[] = [];

	const getData = async () => {
		const q = query(
			likesRef,
			where("userId", "==", data?.userId),
			orderBy("createdAt"),
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
		if (data) {
			getData();
		}
	}, []);

	return { likes };
};
