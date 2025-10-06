import React from "react";
import Me from "./Me";
import Link from "next/link";

export default function IntroSection() {
	return (
		<>
			<div className="grid grid-cols-1 gap-6 md:grid-cols-1 md:gap-4 lg:grid-cols-2 lg:gap-6">
				<Me />
				<div className="grid row-auto text-xl md:text-lg lg:text-xl font-semibold mb-6 md:mt-12 lg:mt-16">
					<div>
						<p>
							Hi I&apos;m Joshua Schell a Junior Software
							Developer based in Cape Town, South Africa.
						</p>
						<p>
							I have a passion for creating interesting software
							solutions.
						</p>
						<p>
							I enjoy seeing how things work and games of all
							types.
						</p>
					</div>
					<div>
						<Link href="#ExperiencePoint">
							<button
								type="button"
								className="cursor-pointer text-gray-900 hover:text-white border border-dashed border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
							>
								Experience
							</button>
						</Link>
						<Link href="#SkillsPoint">
							<button
								type="button"
								className="cursor-pointer text-gray-900 hover:text-white border border-dashed border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
							>
								Skills
							</button>
						</Link>
						<Link href="#ProjectsPoint">
							<button
								type="button"
								className="cursor-pointer text-gray-900 hover:text-white border border-dashed border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
							>
								Projects
							</button>
						</Link>
						<Link href="#ContactPoint">
							<button
								type="button"
								className="cursor-pointer text-gray-900 hover:text-white border border-dashed border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
							>
								Contact Me
							</button>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}
