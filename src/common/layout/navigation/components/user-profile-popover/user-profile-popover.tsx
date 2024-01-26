import { useAppSelector } from "@/store/hooks/hooks";

export const UserProfilePopover = () => {
	const { currentUser } = useAppSelector((state) => state.userPreferenses);

	if (currentUser) {
		return <img src={currentUser.photo as string} alt="" />;
	}

	return <>Profile</>;
};
