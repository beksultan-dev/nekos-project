import { ImageLoader } from "@/common/layout/image-loader/image-loader";
import { Button } from "@/common/ui/button";
import { Dialog } from "@/common/ui/dialog";
import { useAddLikes } from "@/pages/home-page/components/images-list/single-image/hooks/useAddLikes";
import { Item, Rating } from "@/store/models/random-char-models";
import { Expand, ExternalLink, Heart, HeartOff, Shrink } from "lucide-react";
import { Img } from "react-image";
import VisibilitySensor from "react-visibility-sensor";
import { ModalImage } from "./components/modal-image";
import s from "./single-image.module.css";

export const SingleImage = ({ source, image_url, rating, id }: Item) => {
	const { addLike } = useAddLikes();

	const handleAddLike = () => {
		addLike({ source, image_url, imageId: id, rating });
	};

	const handleRedirectToSource = () => {
		window.open(source as string, "_blank");
	};

	return (
		<VisibilitySensor>
			<Dialog>
				<div className="h-[510px]">
					<div className="h-[440px] w-full overflow-hidden rounded">
						<Img
							src={image_url}
							unloader={<h1>Cannot render image</h1>}
							loader={<ImageLoader />}
							className={s.image}
						/>
					</div>

					<div className="mt-[6px] flex justify-center gap-x-2 rounded bg-zinc-300 dark:bg-zinc-800">
						<Button
							size={"icon"}
							onClick={handleAddLike}
							className="hover:text-red-500"
						>
							<Heart size={30} />
						</Button>
						<ModalImage fullImage={image_url} />
						<Button
							size={"icon"}
							onClick={handleRedirectToSource}
							className="hover:text-red-500"
							disabled={source ? false : true}
						>
							<ExternalLink size={30} />
						</Button>
					</div>
				</div>
			</Dialog>
		</VisibilitySensor>
	);
};
