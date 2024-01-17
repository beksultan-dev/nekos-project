import { Img } from "react-image";
import s from "./single-image.module.css";

interface Props {
	src: string;
	loader: JSX.Element;
	unloader: JSX.Element;
}

export const SingleImage = ({ unloader, loader, src }: Props) => {
	return (
		<div className={s.container}>
			<Img src={src} loader={loader} unloader={unloader} className={s.image} />
		</div>
	);
};
