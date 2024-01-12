import { useGetRandomCharacterQuery } from "@/store/api/characters-api";

export const HomePage = () => {
	const { data, isLoading } = useGetRandomCharacterQuery();

	return (
		<div>
			{/* {!isLoading ? (
				<img src={data?.items[0].image_url} alt="image" />
			) : (
				<div>Loading</div>
			)} */}
		</div>
	);
};
