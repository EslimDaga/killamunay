import { ThemeProvider } from "next-themes";
import Layout from "@/components/Layout";
import Head from "next/head";
import "../assets/styles/globals.css";

export default function App({ Component, pageProps }) {
	return (
		<ThemeProvider enableSystem={true} attribute="class">
			<Head>
				<title>Killamunay - Descubre la luna</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ThemeProvider>
	);
}
