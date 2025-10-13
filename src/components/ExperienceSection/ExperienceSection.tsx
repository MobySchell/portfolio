import React from "react";
import JobExperienceCard from "./JobExperienceCard";
import EducationCard from "./EducationCard";

export default function ExperienceSection() {
	return (
		<>
			<div className="w-full overflow-x-hidden min-w-0">
				<div className="flex flex-col items-center justify-center py-2 mx-4 md:mx-16 lg:mx-32 my-12">
					<pre
						className="text-[2.5px] lg:text-[5px] text-center select-none w-full"
						id="ExperiencePoint"
					>
						{String.raw`
░▒▓██████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░      ░▒▓████████▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓████████▓▒░▒▓███████▓▒░░▒▓█▓▒░▒▓████████▓▒░▒▓███████▓▒░ ░▒▓██████▓▒░░▒▓████████▓▒░░▒▓███████▓▒░
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░       
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░      ░▒▓█▓▒░       
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░       ░▒▓██████▓▒░  ░▒▓██████▓▒░░▒▓███████▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░░▒▓█▓▒░▒▓██████▓▒░ ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓██████▓▒░  ░▒▓██████▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░  ░▒▓█▓▒░          ░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░             ░▒▓█▓▒░
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░  ░▒▓█▓▒░          ░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░             ░▒▓█▓▒░
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░  ░▒▓█▓▒░          ░▒▓████████▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓████████▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░▒▓████████▓▒░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░░▒▓████████▓▒░▒▓███████▓▒░ `}
					</pre>
				</div>
				<div className="w-full border border-dashed p-4 rounded-lg">
					{/* Work */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<JobExperienceCard
							company="Project Y"
							title="Intern Fullstack Developer"
							location="Cape Town, South Africa"
							dateRange="Feb 2024 – Present"
							description="Built and upskilled in popular coding languages and used Agile methodologies to complete projects. Wrote clean, readable code and collaborated with team members to complete projects."
							stack={[
								"HTML",
								"CSS",
								"JavaScript",
								"Node.js",
								"Express",
								"MongoDB",
								"AWS",
								"Docker",
								"Kubernetes",
								"CI/CD",
								"Agile",
								"Git",
								"GitHub",
								"SQL",
							]}
						/>
						<JobExperienceCard
							company="Younglings VA"
							title="Operations Manager"
							location="Cape Town, South Africa"
							dateRange="Aug 2021 - Apr 2024"
							description="Managed company operations, coordinated between departments, and implemented process improvements to enhance efficiency and productivity."
							stack={[
								"Leadership",
								"Communication",
								"Project Management",
								"Agile",
								"Time Management",
								"Problem-Solving",
								"Critical Thinking",
								"Collaboration",
							]}
						/>
						<JobExperienceCard
							company="iXperience"
							title="Web Developer"
							location="Remote"
							dateRange="Jul 2021 - Aug 2021"
							description="Developing frontend web applications using CSS or a CSS Framework (Bootstrap), Overview of the web framework React, Modeling data and retrieving/storing that data inside a remote cloud database (Firebase),"
							stack={[
								"JavaScript",
								"React",
								"Firebase",
								"Git",
								"Github",
							]}
						/>
						<JobExperienceCard
							company="Younglings VA"
							title="Web Developer"
							location="Cape Town, South Africa"
							dateRange="Jul 2020 - Aug 2021"
							description="Provided technical expertise and mentorship on programming languages (HTML, CSS, JavaScript) and frameworks (React), enabling mentees to develop robust web applications."
							stack={[
								"JavaScript",
								"React",
								"Vite",
								"Firebase",
								"Git",
								"Github",
							]}
						/>
						<JobExperienceCard
							company="Younglings VA"
							title="Intern Web Developer"
							location="Cape Town, South Africa"
							dateRange="Jun 2019 - Jul 2020"
							description="Assisted with bug fixes, wrote unit tests, and improved small UI components while learning team workflows."
							stack={[
								"HTML",
								"CSS",
								"JavaScript",
								"React",
								"Firebase",
								"Git",
								"Github",
							]}
						/>
					</div>
				</div>
				{/* Education */}
				<div className="grid grid-cols-1 gap-4 mt-8 w-full min-w-0">
					<div className="w-full border border-dashed p-4 rounded-lg">
						<div className="mb-4">
							<h2 className="text-base font-semibold">
								Education
							</h2>
						</div>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:md:grid-cols-2 gap-4">
							<EducationCard
								institution="Rosebank College"
								qualification="Higher Certificate in App Development and Web Development"
								location="Cape Town, South Africa"
								dateRange="Feb 2025 – Feb 2026"
								notes="Focused on software engineering fundamentals, web development and app development."
								coursework={[
									"Intro to Programming Logic",
									"Technical Writing and Communication",
									"Principles of UI",
									"Intro to Quantitative Thinking",
									"Intro to Mobile Application Development",
									"Intro to Web Development",
									"Mobile App Scripting",
									"Work Integrated Learning",
								]}
							/>
							<EducationCard
								institution="Coursera"
								qualification="IBM Full-Stack JavaScript Developer Professional Certificate"
								location="Remote"
								dateRange="Feb 2025 - October 2025"
								notes="Completed projects with modern tooling and deployment workflows. While also completing daily tasks."
								coursework={[
									"JavaScript",
									"HTML",
									"CSS",
									"React",
									"Node.js",
									"Express.js",
									"Cloud Basics",
									"MongoDB",
									"CI/CD",
									"Git",
									"GitHub",
									"Docker",
									"Kubernetes",
									"Agile",
								]}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
