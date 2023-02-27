import Header from "./Header";

export default function Layout({ children }) {
	return (
		<>
			<Header />
			<main className="flex justify-center lg:justify-center flex-col-reverse lg:flex-row section-hero">
				{children}
			</main>
		</>
	);
}
