import {
	NavigationMenu, // NavigationMenuItem,
	NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import { SelectModel } from "../Select";
import s from "./Navigation.module.css";

export const Navigation = () => {
	return (
		<div>
			<NavigationMenu className={s.card}>
				<NavigationMenuList
					style={{
						width: "100vw",
						display: "flex",
						justifyContent: "space-between",
						padding: "0 25px",
					}}
				>
					<Link to="/" className={s.link}>
						Home
					</Link>
					<SelectModel />
				</NavigationMenuList>
			</NavigationMenu>
		</div>
	);
};
