import { Loading } from "@/components/Loading/Loading";
import { useGetRandomCharacterQuery } from "@/store/api/characters-api";
import { Rating } from "@/store/api/types";
import { useInView } from "react-intersection-observer";
import s from "./HomePage.module.css";

export const HomePage = () => {
	const { data, isLoading, isSuccess, isFetching, refetch, status } =
		useGetRandomCharacterQuery({
			limit: "20",
			rating: Rating.Safe,
		});

	const { entry, ref, inView } = useInView({
		initialInView: false,
		onChange(inView, entry) {
			if (inView === true) {
				refetch();
			}
		},
	});

	return (
		<div className={s.container}>
			{status === "rejected" ? <h1>Error</h1> : null}
			{!isLoading ? (
				<>
					{data?.items.map((item) => (
						<img className={s.img} src={item.image_url} alt="image" />
					))}
					<div ref={ref}></div>
				</>
			) : (
				<Loading />
			)}
		</div>
	);
};
