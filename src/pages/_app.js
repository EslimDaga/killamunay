import { ThemeProvider } from "next-themes";
import Layout from "@/components/Layout";
import "../assets/styles/globals.css";

export default function App({ Component, pageProps }) {
	return (
		<ThemeProvider enableSystem={true} attribute="class">
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ThemeProvider>
	);
}
