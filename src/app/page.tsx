import React from "react";
import Welcome from "../components/Welcome";
import SectionBreak from "@/components/SectionBreak";
import IntroSection from "@/components/IntroSection/IntroSection";
import ExperienceSection from "@/components/ExperienceSection/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection/ProjectsSection";
import ContactSection from "@/components/ContactSection/ContactSection";

export default function page() {
	return (
		<>
			<div className="flex flex-col items-center justify-center py-2 mt-32 mx-4 md:mx-16 lg:mx-32">
				<Welcome />
			</div>
			<div className="grid grid-cols-1 items-center justify-center py-2 px-4 md:px-8 lg:px-32 mt-32 w-full">
				<IntroSection />

				<SectionBreak />

				<ExperienceSection />

				<SectionBreak />

				<ProjectsSection />

				<SectionBreak />

				<ContactSection />
			</div>
		</>
	);
}
