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

const topics = ["AI", "ML", "Web Development"];

export default function Projects() {
	const { ref, inView } = useInView({
		threshold: 0.4,
	});
	const [selectedTopic, setSelectedTopic] = useState(null);

	const filteredProjects = selectedTopic
		? projects.filter((p) => p.topic === selectedTopic)
		: projects;

	return (
		<section
			ref={ref}
			id="projects"
			className="w-full min-h-screen flex flex-col justify-between bg-white px-6 py-12"
		>
			<h1 className="text-7xl font-bold text-red-500 font-jaro mb-12">
				Projects
			</h1>

			<div className="flex-1 flex flex-col gap-10">
				{filteredProjects.map((project, idx) => (
					<div
						key={idx}
						className="bg-gray-100 rounded-2xl shadow-md flex flex-col md:flex-row items-center md:items-stretch p-8 md:p-16 min-h-[70vh] md:min-h-[80vh] w-full"
					>
						{/* Left: Description */}
						<div className="flex-1 flex flex-col justify-between md:pr-12">
							<div>
								<h2 className="text-5xl font-bebas font-bold text-black-400 mb-6">
									{project.title}
								</h2>
								<p className="text-2xl font-istok text-black-600 mb-8">
									{project.description}
								</p>
							</div>
							<a
								href={project.link}
								target="_blank"
								rel="noopener noreferrer"
								className="mt-auto inline-block text-red-500 font-semibold transition-colors text-lg flex items-center gap-2 hover:text-red-700"
							>
								View Project{" "}
								<span className="text-red-500">&#8594;</span>
							</a>
						</div>
						{/* Right: Image */}
						<div className="flex-shrink-0 w-full md:w-[40vw] flex justify-center items-center mt-8 md:mt-0">
							<img
								src={project.image}
								alt={project.title}
								className="rounded-xl shadow-lg object-cover w-full h-[350px] md:h-[500px] bg-gray-200 transition-transform duration-300 hover:scale-105"
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
