import {
	NavigationMenu, // NavigationMenuItem,
	NavigationMenuList,
} from "@/components/ui/navigation-menu";
import classNames from "classnames";
import { MoonStar, SunMoon } from "lucide-react";
import { Link } from "react-router-dom";
import { ButtonUI } from "../Button";
import { useTheme } from "../ui/theme-provider";
import s from "./Navigation.module.css";

export const Navigation = () => {
	const { setTheme, theme } = useTheme();
	const handleClick = () => {
		if (theme === "dark") {
			setTheme("light");
		} else {
			setTheme("dark");
		}
	};

	const selectClass = classNames({
		dark: theme === "dark",
		light: theme === "light",
	});

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
					<ButtonUI action={handleClick} className={selectClass}>
						{theme === "dark" ? <MoonStar /> : <SunMoon />}
					</ButtonUI>
				</NavigationMenuList>
			</NavigationMenu>
		</div>
	);
};
