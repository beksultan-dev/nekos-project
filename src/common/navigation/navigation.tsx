import {
	NavigationMenu, // NavigationMenuItem,
	NavigationMenuList,
} from "@/common/ui/navigation-menu";
import { useThemeChange } from "@/hooks/useThemeChange";
import { MoonStar, SunMoon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { ButtonUI } from "../button/button";
import s from "./index.module.css";

export const Navigation = () => {
	const { pathname } = useLocation();

	const { cls, changeTheme, theme } = useThemeChange();

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
					<div>
						<Link to="/" className={s.link}>
							Home
						</Link>
						<Link to="/user-profile" className={s.link}>
							Profile
						</Link>
					</div>

					<ButtonUI onClick={changeTheme} className="theme">
						{theme === "dark" ? <MoonStar /> : <SunMoon />}
					</ButtonUI>
				</NavigationMenuList>
			</NavigationMenu>
		</div>
	);
};
