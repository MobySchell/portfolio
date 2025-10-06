import React from "react";

type Project = {
	name: string;
	description: string;
	technologies: string[];
	link?: string;
	code?: string;
};

const projects: Project[] = [
	{
		name: "Footprint Logger",
		description: "Emissions Tracker",
		technologies: [
			"React",
			"JavaScript",
			"TailwindCSS",
			"Node.js",
			"Express.js",
			"Render",
		],
		link: "",
		code: "https://github.com/MobySchell/Footprint-logger",
	},
	{
		name: "Fullstack Capstone",
		description: "Gift Website",
		technologies: [
			"React",
			"JavaScript",
			"CSS",
			"Node.js",
			"Express.js",
			"Docker",
			"Kubernetes",
		],
		link: "",
		code: "https://github.com/MobySchell/ibm-fullstack-capstone",
	},
	// {
	// 	name: "API Explorer",
	// 	description:
	// 		"Explore REST endpoints with a minimal UI, request history, and sharable links.",
	// 	technologies: ["Node.js", "Express", "React"],
	// 	link: "#",
	// 	code: "#",
	// },
];

export default function ProjectsSection() {
	return (
		<section className="w-full" id="ProjectsPoint">
			<div className="mb-6">
				<h2 className="text-base font-semibold">Projects</h2>
				<p className="text-sm text-gray-600 dark:text-gray-400">
					Selected work with a focus on practicality and semi-polish.
				</p>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
				{projects.map((p) => (
					<article
						key={p.name}
						className="group relative rounded-xl border border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-900/40 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow overflow-hidden"
					>
						<div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-tr from-transparent via-gray-100/60 dark:via-gray-800/40 to-transparent" />
						<div className="p-5">
							<h3 className="text-lg font-semibold mb-1">
								{p.name}
							</h3>
							<p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
								{p.description}
							</p>
							<ul className="flex flex-wrap gap-2 mb-4">
								{p.technologies.map((t) => (
									<li
										key={t}
										className="text-[11px] uppercase tracking-wide px-2 py-1 rounded border border-dashed border-gray-800 dark:border-gray-600 text-gray-800 dark:text-gray-200"
									>
										{t}
									</li>
								))}
							</ul>
							<div className="flex gap-3">
								{p.link ? (
									<a
										href={p.link}
										target="_blank"
										rel="noreferrer"
										className="text-xs cursor-pointer text-gray-900 hover:text-white border border-dashed border-gray-800 hover:bg-gray-900 dark:border-gray-600 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700 rounded-lg px-3 py-1.5 transition-colors"
									>
										Live
									</a>
								) : null}
								{p.code ? (
									<a
										href={p.code}
										target="_blank"
										rel="noreferrer"
										className="text-xs cursor-pointer text-gray-900 hover:text-white border border-dashed border-gray-800 hover:bg-gray-900 dark:border-gray-600 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700 rounded-lg px-3 py-1.5 transition-colors"
									>
										Code
									</a>
								) : null}
							</div>
						</div>
					</article>
				))}
			</div>
		</section>
	);
}
