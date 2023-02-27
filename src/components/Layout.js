import Header from "./Header";

export default function Layout({ children }) {
	return (
		<>
			<Header />
			<main className="flex justify-center section-hero">{children}</main>
		</>
	);
}
