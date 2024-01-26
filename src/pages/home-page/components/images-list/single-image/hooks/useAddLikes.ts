import { db } from "@/shared/config/firebase-config";
import { showConner } from "@/shared/lib/showSonner";
import { useAppSelector } from "@/store/hooks/hooks";
import { Rating } from "@/store/models/random-char-models";
import { addDoc, collection, deleteDoc, doc, serverTimestamp } from "firebase/firestore";
import { useCallback } from "react";

type RandomImageModel = {
	imageId: number;
	source: string | null;
	image_url: string;
	rating: Rating;
};

export const useAddLikes = () => {
	const likesRef = collection(db, "likes");
	const { currentUser } = useAppSelector((state) => state.userPreferenses);

	const addLike = useCallback(
		async ({ imageId, source, image_url, rating }: RandomImageModel) => {
			if (!currentUser) {
				showConner({ text: "Log in first", variant: "warning" });
				return;
			}

			await addDoc(likesRef, {
				userId: currentUser?.userId,
				imageId,
				source,
				image_url,
				rating,
				createdAt: serverTimestamp(),
			});
			showConner({ text: "Image added", variant: "success" });
		},
		[likesRef],
	);

	const remove = useCallback(async (id: string) => {
		await deleteDoc(doc(db, "likes", id));
	}, []);

	return { addLike, remove };
};
