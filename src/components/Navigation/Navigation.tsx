import {
	NavigationMenu, // NavigationMenuItem,
	NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { useThemeCustom } from "@/hooks";
import { MoonStar, SunMoon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { ButtonUI } from "../Button";
import s from "./Navigation.module.css";

export const Navigation = () => {
	const { pathname } = useLocation();

	const { cls, changeTheme, theme } = useThemeCustom();

	return (
		<div>
			<NavigationMenu className={s[cls]}>
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

					<ButtonUI onClick={changeTheme} className="theme">
						{theme === "dark" ? <MoonStar /> : <SunMoon />}
					</ButtonUI>
				</NavigationMenuList>
			</NavigationMenu>
		</div>
	);
};
