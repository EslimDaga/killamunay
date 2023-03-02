import Particles from "react-particles";
import { useTheme } from "next-themes";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

const ParticlesBackground = () => {
	const { theme } = useTheme();
	const particlesInit = useCallback(async engine => {
		await loadFull(engine);
	}, []);

	const particlesLoaded = useCallback(async container => {
		await container.refresh();
	}, []);
	return (
		<Particles
			id="tsparticles"
			className="w-full h-screen absolute top-0 bg-white dark:bg-dark-primary"
			init={particlesInit}
			loaded={particlesLoaded}
			options={{
				fullScreen: {
					enable: false,
				},
				fpsLimit: 60,
				particles: {
					groups: {
						z5000: {
							number: {
								value: 10,
							},
							zIndex: {
								value: 5000,
							},
						},
						z7500: {
							number: {
								value: 10,
							},
							zIndex: {
								value: 10,
							},
						},
						z2500: {
							number: {
								value: 50,
							},
							zIndex: {
								value: 25,
							},
						},
						z1000: {
							number: {
								value: 40,
							},
							zIndex: {
								value: 10,
							},
						},
					},
					number: {
						value: 1000,
						density: {
							enable: false,
							value_area: 900,
						},
					},
					color: {
						value: theme === "dark" ? "#F1F2F3" : "#191820",
						animation: {
							enable: false,
							speed: 1,
							sync: true,
						},
					},
					shape: {
						type: "circle",
					},
					opacity: {
						value: theme === "dark" ? 0.3 : 0.2,
						random: false,
						animation: {
							enable: false,
							speed: 0.5,
							minimumValue: 0.1,
							sync: false,
						},
					},
					size: {
						value: 2,
					},
					links: {
						enable: false,
						distance: 100,
						color: "#ffffff",
						opacity: 0.4,
						width: 1,
					},
					move: {
						angle: {
							value: 10,
							offset: 0,
						},
						enable: true,
						speed: 1,
						direction: "right",
						random: false,
						straight: true,
						outModes: {
							default: "out",
						},
						attract: {
							enable: false,
							rotateX: 600,
							rotateY: 1200,
						},
					},
					zIndex: {
						value: 5,
						opacityRate: 0.5,
					},
				},
				interactivity: {
					detectsOn: "canvas",
					events: {
						onHover: {
							enable: false,
							mode: "repulse",
						},
						onClick: {
							enable: true,
							mode: "push",
						},
						resize: true,
					},
					modes: {
						grab: {
							distance: 400,
							links: {
								opacity: 1,
							},
						},
						bubble: {
							distance: 400,
							size: 40,
							duration: 2,
							opacity: 0.8,
						},
						repulse: {
							distance: 200,
						},
						push: {
							quantity: 4,
							groups: ["z5000", "z7500", "z2500", "z1000"],
						},
						remove: {
							quantity: 2,
						},
					},
				},
				detectRetina: true,
				background: {
					image: "",
					position: "50% 50%",
					repeat: "no-repeat",
					size: "cover",
				},
				emitters: {
					position: {
						y: 55,
						x: -30,
					},
					rate: {
						delay: 7,
						quantity: 1,
					},
					size: {
						width: 0,
						height: 0,
					},
				},
			}}
		/>
	);
};

export default ParticlesBackground;
