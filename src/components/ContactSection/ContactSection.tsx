import React from "react";

const iconBase =
	"inline-flex items-center justify-center h-11 w-11 rounded-lg border border-dashed border-gray-800 dark:border-gray-600 text-gray-900 dark:text-gray-300 hover:bg-gray-900 hover:text-white dark:hover:bg-gray-700 transition-colors";

export default function ContactSection() {
	return (
		<section
			className="w-full border border-dashed p-4 rounded-lg mb-32"
			id="ContactPoint"
		>
			<div className="mb-4">
				<h2 className="text-base font-semibold">Contact</h2>
				<p className="text-sm text-gray-600 dark:text-gray-400">
					Connect with me on these platforms
				</p>
			</div>
			<div className="flex items-center gap-4">
				<a
					href="https://www.linkedin.com/in/schelljoshua"
					target="_blank"
					rel="noreferrer"
					className={iconBase}
					aria-label="LinkedIn"
				>
					{/* LinkedIn Icon */}
					<svg
						viewBox="0 0 24 24"
						fill="currentColor"
						className="h-5 w-5"
					>
						<path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V23h-4V8.5zM8.5 8.5h3.8v2h.05c.53-1 1.84-2.05 3.79-2.05 4.05 0 4.8 2.66 4.8 6.12V23h-4v-5.9c0-1.41-.03-3.23-1.97-3.23-1.97 0-2.27 1.54-2.27 3.13V23h-4V8.5z" />
					</svg>
				</a>
				<a
					href="https://github.com/MobySchell"
					target="_blank"
					rel="noreferrer"
					className={iconBase}
					aria-label="GitHub"
				>
					{/* GitHub Icon */}
					<svg
						viewBox="0 0 24 24"
						fill="currentColor"
						className="h-5 w-5"
					>
						<path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.51 2.87 8.33 6.84 9.68.5.09.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.17-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.9 1.58 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.15-4.56-5.12 0-1.13.39-2.05 1.03-2.77-.1-.26-.45-1.31.1-2.74 0 0 .84-.27 2.75 1.05.8-.23 1.65-.35 2.5-.35s1.7.12 2.5.35c1.91-1.32 2.75-1.05 2.75-1.05.55 1.43.2 2.48.1 2.74.64.72 1.03 1.64 1.03 2.77 0 3.98-2.34 4.86-4.57 5.12.36.32.68.95.68 1.92 0 1.38-.01 2.49-.01 2.83 0 .27.18.59.69.49A10.05 10.05 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
					</svg>
				</a>
				<a
					href="mailto:devjschell@gmail.com"
					target="_blank"
					rel="noreferrer"
					className={iconBase}
					aria-label="Email"
				>
					{/* Email Icon */}
					<svg
						viewBox="0 0 24 24"
						fill="currentColor"
						className="h-5 w-5"
					>
						<path d="M20 4H4c-1.11 0-2 .9-2 2v12a2 2 0 0 0 2 2h16c1.11 0 2-.9 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5v2Z" />
					</svg>
				</a>
			</div>
		</section>
	);
}
