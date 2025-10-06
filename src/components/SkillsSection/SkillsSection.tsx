import React from "react";

type SkillGroup = {
	title: string;
	skills: string[];
};

const groups: SkillGroup[] = [
	{
		title: "Languages",
		skills: ["TypeScript", "JavaScript", "HTML", "CSS", "SQL"],
	},
	{ title: "Frameworks", skills: ["React", "Next.js", "Node.js", "Express"] },
	{ title: "Tools", skills: ["Git", "GitHub", "Docker", "CI/CD"] },
	{ title: "Cloud", skills: ["Firebase", "Vercel", "Render"] },
];

export default function SkillsSection() {
	return (
		<div
			className="w-full border border-dashed p-4 rounded-lg"
			id="SkillsPoint"
		>
			<div className="mb-4">
				<h2 className="text-base font-semibold">Skills</h2>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				{groups.map((group) => (
					<div
						key={group.title}
						className="rounded-lg border border-dashed border-gray-800 dark:border-gray-600 p-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
					>
						<h3 className="text-sm font-semibold mb-2">
							{group.title}
						</h3>
						<ul className="flex flex-wrap gap-2">
							{group.skills.map((skill) => (
								<li
									key={skill}
									className="text-xs px-2 py-1 rounded border border-dashed border-gray-800 dark:border-gray-600 text-gray-700 dark:text-gray-300"
								>
									{skill}
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</div>
	);
}
