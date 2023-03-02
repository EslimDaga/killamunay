import { useEffect, useState } from "react";
import {
	LazyLoadImage,
	LazyLoadComponent,
} from "react-lazy-load-image-component";
import { Moon } from "lunarphase-js";
import ParticlesBackground from "@/components/ParticlesBackground";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function Home() {
	const [moonPhase, setMoonPhase] = useState("phase_new");
	const [moonPhaseName, setMoonPhaseName] = useState("");

	const today = new Date();
	const moon_phase_emoji = Moon.lunarPhaseEmoji(today);
	const moon_phase = Moon.lunarPhase(today);

	useEffect(() => {
		switch (moon_phase) {
			case "New":
				setMoonPhase("phase_new");
				setMoonPhaseName("Luna Nueva");
				break;
			case "Waxing Crescent":
				setMoonPhase("phase_waxing_crescent");
				setMoonPhaseName("Luna Nueva Creciente");
				break;
			case "First Quarter":
				setMoonPhase("phase_first_quarter");
				setMoonPhaseName("Cuarto Creciente");
				break;
			case "Waxing Gibbous":
				setMoonPhase("phase_waxing_gibbous");
				setMoonPhaseName("Luna Creciente Gibosa");
				break;
			case "Full":
				setMoonPhase("phase_full");
				setMoonPhaseName("Luna Llena");
				break;
			case "Waning Gibbous":
				setMoonPhase("phase_waning_gibbous");
				setMoonPhaseName("Luna Menguante Gibosa");
				break;
			case "Last Quarter":
				setMoonPhase("phase_last_quarter");
				setMoonPhaseName("Cuarto Menguante");
				break;
			case "Waning Crescent":
				setMoonPhase("phase_waning_crescent");
				setMoonPhaseName("Luna Menguante Creciente");
				break;
			default:
				break;
		}
	}, [moonPhase]);

	return (
		<>
			<ParticlesBackground />
			<section className="hero-content w-full flex flex-col items-start justify-center gap-4 lg:gap-10 px-4 lg:px-8 z-10">
				<h1 className="font-extrabold text-3xl lg:text-6xl text-dark-primary dark:text-white">
					Descrubre tu luna
				</h1>
				<p className="font-medium text-base lg:text-xl text-dark-primary dark:text-white">
					💌 Descubre cómo lucía la luna en el momento en que tú o esa persona
					especial nacieron. ❤️
				</p>
				<button className="bg-primary hover:bg-secondary px-6 py-3 lg:py-4 rounded-xl font-semibold text-lg text-dark-primary">
					Comenzar
				</button>
			</section>
			<section className="hero-content w-full flex items-center justify-center px-4 lg:px-8 z-10">
				<div className="flex flex-col items-center justify-center">
					<LazyLoadComponent>
						<h2 className="font-bold text-center text-primary text-2xl lg:text-3xl xl:text-4xl">
							{moonPhaseName} {moon_phase_emoji}
						</h2>
					</LazyLoadComponent>
					<LazyLoadImage
						effect="blur"
						src={`/images/moon-phases/${moonPhase}.png`}
						alt="Moon Phase"
						className="w-72 h-72 lg:w-[30rem] lg:h-[30rem]"
					/>
				</div>
			</section>
		</>
	);
}
