import React from "react";

type JobExperienceCardProps = {
	company: string;
	title: string;
	location?: string;
	dateRange?: string;
	description?: string;
	stack?: string[];
};

export default function JobExperienceCard({
	company,
	title,
	location,
	dateRange,
	description,
	stack = [],
}: JobExperienceCardProps) {
	return (
		<div className="w-full rounded-lg border border-dashed border-gray-800 dark:border-gray-600 p-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
			<div className="flex items-start justify-between gap-2">
				<div>
					<h3 className="text-lg font-semibold">{title}</h3>
					<p className="text-sm text-gray-600 dark:text-gray-400">
						{company}
					</p>
				</div>
				{dateRange ? (
					<span className="text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap">
						{dateRange}
					</span>
				) : null}
			</div>
			{location ? (
				<p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
					{location}
				</p>
			) : null}
			{description ? (
				<p className="mt-3 text-sm leading-relaxed">{description}</p>
			) : null}
			{stack.length > 0 ? (
				<ul className="mt-3 flex flex-wrap gap-2">
					{stack.map((tech) => (
						<li
							key={tech}
							className="text-xs px-2 py-1 rounded border border-dashed border-gray-800 dark:border-gray-600 text-gray-700 dark:text-gray-300"
						>
							{tech}
						</li>
					))}
				</ul>
			) : null}
		</div>
	);
}
