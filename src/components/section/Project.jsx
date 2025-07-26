import BottomNavBar from "../ui/BottomNavBar";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

const projects = [
	{
		title: "AI Chatbot",
		topic: "AI",
		description:
			"A conversational AI chatbot built using React and OpenAI API. It can answer user queries and learn from interactions.",
		image: "/images/project-chatbot.png",
		link: "https://github.com/yourusername/ai-chatbot",
	},
	{
		title: "ML Predictor",
		topic: "ML",
		description:
			"A machine learning predictor app that uses historical data to predict future outcomes. Built with Python and Flask.",
		image: "/images/project-ml-predictor.png",
		link: "https://github.com/yourusername/ml-predictor",
	},
	{
		title: "Portfolio Website",
		topic: "Web Development",
		description:
			"A personal portfolio website showcasing my skills, projects, and certifications. Built with React and Tailwind CSS.",
		image: "/images/project-portfolio.png",
		link: "https://github.com/yourusername/portfolio",
	},
	// Add more projects as needed
];

const topics = ["AI", "ML", "Flutter", "WebDev"];

export default function Projects() {
	const { ref, inView } = useInView({
		threshold: 0.3,
	});
	const [selectedTopic, setSelectedTopic] = useState(null);

	const filteredProjects = selectedTopic
		? projects.filter((p) => p.topic === selectedTopic)
		: projects;

	return (
		<section
			ref={ref}
			id="projects"
			className="w-full min-h-screen bg-white flex flex-col justify-between px-6 py-12"
		>
			<h1 className="text-7xl font-bold text-orange-500 font-jaro mb-12 flex items-center">
				Projects
			</h1>

			<div className="flex-1 flex flex-col gap-10">
				{filteredProjects.map((project, idx) => (
					<div
						key={idx}
						className="rounded-2xl bg-white shadow-[0_8px_40px_rgba(60,60,60,0.18)] flex flex-col md:flex-row items-center md:items-stretch p-6 md:p-10 border border-gray-100 transition-shadow duration-300"
					>
						{/* Left: Description */}
						<div className="flex-1 flex flex-col justify-between md:pr-12">
							<div>
								<h2 className="text-4xl font-extrabold font-montserrat tracking-tight text-gray-500 mb-4">
									{project.title}
								</h2>
								<p className="text-lg font-istok text-black mb-6">
									{project.description}
								</p>
							</div>
							<a
								href={project.link}
								target="_blank"
								rel="noopener noreferrer"
								className="mt-auto inline-block text-blue-600 font-semibold transition-colors text-base flex items-center gap-2 hover:text-blue-800"
							>
								View Project{" "}
								<span className="text-blue-600">&#8594;</span>
							</a>
						</div>
						{/* Right: Image */}
						<div className="flex-shrink-0 w-full md:w-[40vw] flex justify-center items-center mt-8 md:mt-0">
							<img
								src={project.image}
								alt={project.title}
								className="rounded-xl shadow-lg object-cover w-full h-[300px] md:h-[400px] bg-gray-100 transition-transform duration-300 hover:scale-105 hover:shadow-[0_12px_48px_rgba(60,60,60,0.22)]"
							/>
						</div>
					</div>
				))}
			</div>

			<BottomNavBar
				inView={inView}
				topics={topics}
				selectedTopic={selectedTopic}
				setSelectedTopic={setSelectedTopic}
			/>
		</section>
	);
}
