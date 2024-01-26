import { Button } from "@/common/ui/button";
import { UserModel } from "@/store/models/user-model";
import { LogOut } from "lucide-react";
import { Img } from "react-image";
import { useNavigate } from "react-router-dom";

interface Props {
	user: UserModel;
	logOut: () => Promise<void>;
	placeHolder: string;
}

export const UserProfileInfo = ({ user, logOut, placeHolder }: Props) => {
	const navigate = useNavigate();

	const handle = async () => {
		await logOut();
		navigate("/");
	};

	return (
		<div className="mb-8 flex h-max justify-between rounded-sm bg-zinc-300 p-2 dark:bg-zinc-800">
			<div className="flex flex-col gap-3">
				<div className="w-24 overflow-hidden rounded-sm">
					<Img
						className="h-full w-full object-cover"
						src={user?.photo || placeHolder}
					></Img>
				</div>

				<div>{user?.email}</div>
				{user?.name && <div>{user?.name}</div>}

				<Button
					className="bg-red-900 text-white hover:bg-red-800 hover:text-white"
					onClick={handle}
				>
					<LogOut className="mr-1 " /> Sign out
				</Button>
			</div>
		</div>
	);
};
