import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="es">
			<Head>
				<link rel="icon" href="/images/favicon.png" />
				<meta charSet="utf-8" />
				<meta
					name="description"
					content="Killamunay es un nombre que fusiona el quechua y el español, que representa la unión del amor y la luna. Esta plataforma te permite descubrir cómo lucía la luna en el momento en que tú o esa persona especial nacieron. Con solo ingresar la fecha de nacimiento, podrás ver la imagen de la luna en su fase correspondiente. Con Killamunay, podrás sorprender a tus amigos, familiares y seres queridos con un detalle único y especial que refleja su conexión con el universo. ¡Descubre la luna de tus seres queridos con Killamunay!."
				/>
				<meta name="author" content="Eslim Daga" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
