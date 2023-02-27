import Header from "./Header";

export default function Layout({ children }) {
	return (
		<>
			<Header />
			<main className="flex justify-center flex-col lg:flex-row section-hero">
				{children}
			</main>
		</>
	);
}
