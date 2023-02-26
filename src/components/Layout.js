export default function Layout({ children }) {
	return (
		<>
			<header>
				<h1>My Site</h1>
			</header>
			<main>{children}</main>
		</>
	);
}
