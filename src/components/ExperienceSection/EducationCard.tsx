import React from "react";

type EducationCardProps = {
	institution: string;
	qualification: string; // Degree, Diploma, Certificate
	location?: string;
	dateRange?: string;
	notes?: string; // brief description
	coursework?: string[]; // optional list of courses/subjects
};

export default function EducationCard({
	institution,
	qualification,
	location,
	dateRange,
	notes,
	coursework = [],
}: EducationCardProps) {
	return (
		<div className="w-full rounded-lg border border-dashed border-gray-800 dark:border-gray-600 p-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
			<div className="flex items-start justify-between gap-2">
				<div>
					<h3 className="text-lg font-semibold">{qualification}</h3>
					<p className="text-sm text-gray-600 dark:text-gray-400">
						{institution}
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
			{notes ? (
				<p className="mt-3 text-sm leading-relaxed">{notes}</p>
			) : null}
			{coursework.length > 0 ? (
				<ul className="mt-3 flex flex-wrap gap-2">
					{coursework.map((subject) => (
						<li
							key={subject}
							className="text-xs px-2 py-1 rounded border border-dashed border-gray-800 dark:border-gray-600 text-gray-700 dark:text-gray-300"
						>
							{subject}
						</li>
					))}
				</ul>
			) : null}
		</div>
	);
}
