import { db } from "@/shared/config/firebase-config";
import { showConner } from "@/shared/lib/showSonner";
import { Rating } from "@/store/models/randomCharactersModels";
import { addDoc, collection, deleteDoc, doc, serverTimestamp } from "firebase/firestore";
import { useCallback } from "react";
import { useGetAuthUser } from "../../../../../../shared/hooks/useGetAuthUser";

type RandomImageModel = {
	imageId: number;
	source: string | null;
	image_url: string;
	rating: Rating;
};

export const useAddLikes = () => {
	const likesRef = collection(db, "likes");
	const user = useGetAuthUser();

	const addLike = useCallback(
		async ({ imageId, source, image_url, rating }: RandomImageModel) => {
			if (!user) {
				showConner({ text: "Log in first", variant: "warning" });
				return;
			}

			await addDoc(likesRef, {
				userId: user?.userId,
				imageId,
				source,
				image_url,
				rating,
				createdAt: serverTimestamp(),
			});
			showConner({ text: "Image added", variant: "success" });
		},
		[likesRef, user],
	);

	const remove = useCallback(async (id: string) => {
		await deleteDoc(doc(db, "likes", id));
	}, []);

	return { addLike, remove };
};
