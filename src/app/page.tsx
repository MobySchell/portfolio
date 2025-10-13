import React from "react";
import Welcome from "../components/Welcome";
import SectionBreak from "@/components/SectionBreak";
import IntroSection from "@/components/IntroSection/IntroSection";
import ExperienceSection from "@/components/ExperienceSection/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection/ProjectsSection";
import ContactSection from "@/components/ContactSection/ContactSection";
import Spacing from "@/components/Spacing";

export default function page() {
	return (
		<>
			<div className="flex flex-col items-center justify-center py-2 my-20 mx-4 md:mx-16 lg:mx-32">
				<Welcome />
			</div>
			<div className="grid grid-cols-1 items-center justify-center py-2 px-4 md:px-8 lg:px-32 w-full">
				<IntroSection />

				<SectionBreak />

				<ExperienceSection />

				<Spacing />

				<ProjectsSection />

				<Spacing />

				<ContactSection />
			</div>
		</>
	);
}
