import { db } from "@/shared/config/firebase-config";
import { Rating } from "@/store/models/randomCharactersModels";
import { addDoc, collection, deleteDoc, doc, serverTimestamp } from "firebase/firestore";
import { useCallback } from "react";
import { useGetAuthUser } from "../../../../../../shared/hooks/useGetAuthUser";

type Props = ReturnType<typeof useGetAuthUser>;
type RandomImageModel = {
	imageId: number;
	source: string | null;
	image_url: string;
	rating: Rating;
};

export const useAddLikes = (user: Props) => {
	const likesRef = collection(db, "likes");

	const addLike = useCallback(
		async ({ imageId, source, image_url, rating }: RandomImageModel) => {
			await addDoc(likesRef, {
				userId: user?.userId,
				imageId,
				source,
				image_url,
				rating,
				createdAt: serverTimestamp(),
			});
		},
		[likesRef, user?.userId],
	);

	const remove = useCallback(async (id: string) => {
		await deleteDoc(doc(db, "likes", id));
	}, []);

	return { addLike, remove };
};
