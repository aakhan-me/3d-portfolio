export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "Full Stack Web Developer",
		icon: "/web.webp",
	},
	{
		title: "DevOps",
		icon: "/mobile.webp",
	},
	{
		title: "UI/UX Designer",
		icon: "/backend.webp",
	},
	{
		title: "Content Creator",
		icon: "/creator.webp",
	},
];

const technologies = [
	{
		name: "HTML 5",
		icon: "/tech/html.webp",
	},
	{
		name: "CSS 3",
		icon: "/tech/css.webp",
	},
	{
		name: "JavaScript",
		icon: "/tech/javascript.webp",
	},
	{
		name: "TypeScript",
		icon: "/tech/typescript.webp",
	},
	{
		name: "React JS",
		icon: "/tech/reactjs.webp",
	},
	{
		name: "Next.JS",
		icon: "/tech/nextjs.svg",
	},
	{
		name: "Redux Toolkit",
		icon: "/tech/redux.webp",
	},
	{
		name: "Tailwind CSS",
		icon: "/tech/tailwind.webp",
	},
	{
		name: "Three JS",
		icon: "/tech/threejs.webp",
	},
	{
		name: "git",
		icon: "/tech/git.webp",
	},
	{
		name: "figma",
		icon: "/tech/figma.webp",
	},
	{
		name: "wordpress",
		icon: "/tech/wordpress.webp",
	},
	{
		name: "bootstrap",
		icon: "/tech/bootstrap.webp",
	},
];

const experiences = [
	{
		title: "Web Developer",
		company_name: "IPLEX Technologies",
		icon: "/company/iplex.jpeg",
		iconBg: "#000",
		date: "2013 -  2018",
		points: [
			"Analyzing the needs of customer in a website.",
			"Designing User Interface (UI) for the problem statement.",
			"Improving designs to make more user friendly.",
			"User Experience improvements and feedbacks.",
		],
	},
	{
		title: "Embrace IT Pakistan",
		company_name: "Software Engineer",
		icon: "/company/embraceit.jpeg",
		iconBg: "#fff",
		date: "2018 - 2021",
		points: [
			"Provide technical guidance to development teams, ensuring the", 
			"successful execution of projects",
			"Independently work on personal software projects, showcasing individual initiative and expertise",
			"Manage projects, ensuring timely delivery and adherence to quality standards",
			"Communicate effectively with clients, addressing their needs and ensuring satisfaction",
		],
	},
	{
		title: "Strategic Systems International",
		company_name: "Principle Software Engineer",
		icon: "/company/ssi.jpg",
		iconBg: "#fff",
		date: "2021 - 2022",
		points: [
			"Develop, document, and test software to meet end-users' needs and align with business goals",
			"Provide technical guidance to development teams, fostering a collaborative and innovative environment",
			"Take ownership of personal projects, demonstrating self-driven initiative",
			"Collaborate effectively within a team, contributing to a positive and productive work environment",
			"Offer mentorship to team members, sharing knowledge and expertise",
		],
	},
	{
		title: "Gubloo Technologies",
		company_name: "Senior Software Engineer",
		icon: "/company/gubloo.png",
		iconBg: "#fff",
		date: "2022 - 2023",
		points: [
			"Oversee the technical aspects of all projects, ensuring quality and efficiency",
			"Independently work on personal software projects, showcasing individual initiative and expertise",
			"Collaborate effectively within a team, contributing to a positive and productive work environment",
			"Offer mentorship to team members, sharing knowledge and expertise",
		],
	},
];

const testimonials = [
	{
		id: 1,
		testimonial:
			"LinkedIn is a business and employment-focused social media platform that works through websites and mobile apps.",
		name: "Awais Ahmed Khan",
		image: "/socialmedia/linkedin.svg",
		link: "https://www.linkedin.com/in/aakhanyousuf/",
	},
	{
		id: 2,
		testimonial:
			"Also do check out my Github Profile where I have shared all my codes from basic to advanced.",
		name: "Awais Ahmed Khan",
		image: "/tech/github.webp",
		link: "https://github.com/aakhan-me",
	},
];

const projects = [
	{
		name: "Motivations AI Personality Assessment",
		description:
			"It is the desire to do something because it is interesting, enjoyable, or personally meaningful. In the context of artificial intelligence (AI), intrinsic motivation is what drives an AI system to keep learning and improving itself.",
		tags: [
			{
				name: "laravel",
				color: "blue-text-gradient",
			},
			{
				name: "tailwind",
				color: "orange-text-gradient",
			},
			{
				name: "artificialintelligence",
				color: "blue-text-gradient",
			},
			{
				name: "vanilajs",
				color: "pink-text-gradient",
			},
		],
		image: "/projectimg/motivations.png",
		netlify_link: "https://motivationsai.com",
	},
	{
		name: "Outside Chicago Website",
		description:
			"The Outside Chicago website served as a comprehensive guide to activities available outside the city, offering detailed descriptions, locations, and amenities for various destinations.",
		tags: [
			{
				name: "php",
				color: "blue-text-gradient",
			},
			{
				name: "bootstrap",
				color: "pink-text-gradient",
			},
			{
				name: "flexiblecontent",
				color: "orange-text-gradient",
			},
			{
				name: "vanilajs",
				color: "red-text-gradient",
			},
			{
				name: "customplugin",
				color: "white-text-gradient",
			},
			{
				name: "customtheme",
				color: "green-text-gradient",
			}
		],
		image: "/projectimg/chicago.png",
		netlify_link: "https://outsidechicago.com/",
	},
	{
		name: "Essence",
		description:
			"ESSENCE Communications is the number one media, technology, and commerce company dedicated to Black women and inspires a global audience of more than 20 million through diverse storytelling and immersive original content.",
		tags: [
			{
				name: "php",
				color: "blue-text-gradient",
			},
			{
				name: "vanilajs",
				color: "orange-text-gradient",
			},
			{
				name: "bootstrap",
				color: "green-text-gradient",
			},
			{
				name: "customplugin",
				color: "white-text-gradient",
			},
			{
				name: "customtheme",
				color: "pink-text-gradient",
			}
		],
		image: "/projectimg/essence.png",
		netlify_link: "https://essence.com/",
	},
	{
		name: "Dermatological Care",
		description:
			"Dermatological care is critical to addressing health care inequity and we are expanding access to these services. Increasing access to dermatological care will allow for earlier detection of life-threatening conditions such as skin cancer and provide the preventative treatment necessary to help improve health inequities.",
		tags: [
			{
				name: "php",
				color: "blue-text-gradient",
			},
			{
				name: "bootstrap",
				color: "green-text-gradient",
			},
			{
				name: "customplugin",
				color: "orange-text-gradient",
			},
			{
				name: "customtheme",
				color: "pink-text-gradient",
			}
		],
		image: "/projectimg/usderma.png",
		netlify_link: "https://usdermatologypartners.com",
	},
	{
		name: "Jobs Portal Cointelegraph",
		description:
			"Cointelegrapgh is a company based in the US which specializes in The most recent news about the crypto industry at Cointelegraph. Latest news about bitcoin, Ethereum, blockchain, mining, cryptocurrency prices, and more",
		tags: [
			{
				name: "php",
				color: "blue-text-gradient",
			},
			{
				name: "bootstrap",
				color: "green-text-gradient",
			},
			{
				name: "customplugin",
				color: "orange-text-gradient",
			},
			{
				name: "customtheme",
				color: "pink-text-gradient",
			}
		],
		image: "/projectimg/cointelegraph.png",
		netlify_link: "https://jobs.cointelegraph.com",
	},
	{
		name: "A 3D Developer Portfolio",
		description:
			"A responsive 3D Portfolio website which is made using Three.js a cross-browser JavaScript library and application programming interface used to create and display animated 3D computer graphics in a web browser using WebGL. It has a beautiful interface made using Tailwind CSS and React.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "tailwind",
				color: "green-text-gradient",
			},
			{
				name: "threejs",
				color: "orange-text-gradient",
			},
			{
				name: "emailjs",
				color: "pink-text-gradient",
			},
		],
		image: "/projectimg/portfoliosample.webp",
		source_code_link: "https://github.com/aakhan-me/new-portfolio",
		netlify_link: "https://awaisworks.com",
	},
];

export { services, technologies, experiences, testimonials, projects };
