import {
	NavigationMenu, // NavigationMenuItem,
	NavigationMenuList,
} from "@/common/ui/navigation-menu";
import { useThemeChange } from "@/shared/hooks/useThemeChange";
import { MoonStar, SunMoon } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Button } from "../../ui/button";
import { UserProfilePopover } from "./components/user-profile-popover/user-profile-popover";
import s from "./index.module.css";

export const Navigation = () => {
	const { cls, changeTheme, theme } = useThemeChange();

	return (
		<header className="sticky top-0 z-50 bg-zinc-300 dark:bg-zinc-800">
			<NavigationMenu className={s[cls]}>
				<NavigationMenuList className="flex w-screen justify-between px-6">
					<div>
						<NavLink to="/" className={s.link}>
							Home
						</NavLink>
						<NavLink to="/user-profile" className={s.link}>
							<UserProfilePopover />
						</NavLink>
					</div>

					<Button
						variant={"outline"}
						size={"icon"}
						onClick={changeTheme}
						className="rounded-full border-slate-500 bg-inherit"
					>
						{theme === "dark" ? <MoonStar /> : <SunMoon />}
					</Button>
				</NavigationMenuList>
			</NavigationMenu>
		</header>
	);
};
