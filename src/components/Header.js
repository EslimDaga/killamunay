import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@heroicons/react/solid";

const Header = () => {
	const [mounted, setMounted] = useState(false);
	const { systemTheme, theme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	const currentTheme = theme === "system" ? systemTheme : theme;

	return (
		<header className="w-full h-24 flex items-center justify-between px-4 lg:px-8">
			<img
				src="/images/logo-killamunay-dark.png"
				alt="logo-killamunay-dark"
				className="z-10 lg:w-52 w-44"
			/>
			{currentTheme === "dark" ? (
				<SunIcon
					className="w-10 h-10 z-10 text-primary "
					role="button"
					onClick={() => setTheme("light")}
				/>
			) : (
				<MoonIcon
					className="w-10 h-10 z-10 text-primary "
					role="button"
					onClick={() => setTheme("dark")}
				/>
			)}
		</header>
	);
};

export default Header;
