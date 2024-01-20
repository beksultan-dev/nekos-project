import { db } from "@/config/firebase-config";
import { Rating } from "@/store/api/types";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useGetAuthUser } from "../../../../../hooks/useGetAuthUser";

export const useAddLikes = () => {
	const likesRef = collection(db, "likes");
	const data = useGetAuthUser();

	const addLike = async (
		imageId: number,
		source: string | null,
		image_url: string,
		rating: Rating,
	) => {
		await addDoc(likesRef, {
			userId: data?.userId,
			imageId,
			source,
			image_url,
			rating,
			createdAt: serverTimestamp(),
		});
	};

	return { addLike };
};
