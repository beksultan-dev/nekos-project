import s from "./Loading.module.css";

export const Loading = () => {
	return (
		<div className={s.container}>
			<div className={s[`lds-ellipsis`]}>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	);
};
