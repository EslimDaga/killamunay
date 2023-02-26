import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@heroicons/react/solid";

export default function Layout({ children }) {
	const [mounted, setMounted] = useState(false);
	const { systemTheme, theme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	const renderThemeChanger = () => {
		if (!mounted) return null;

		const currentTheme = theme === "system" ? systemTheme : theme;

		if (currentTheme === "dark") {
			return (
				<SunIcon
					className="w-10 h-10 text-yellow-500 "
					role="button"
					onClick={() => setTheme("light")}
				/>
			);
		} else {
			return (
				<MoonIcon
					className="w-10 h-10 text-gray-900 "
					role="button"
					onClick={() => setTheme("dark")}
				/>
			);
		}
	};

	return (
		<>
			<header className="w-full h-24 flex items-center justify-between px-8">
				<img
					src="/images/logo-killamunay-dark.png"
					alt="logo-killamunay-dark"
				/>
				{renderThemeChanger()}
			</header>
			<main>{children}</main>
		</>
	);
}
