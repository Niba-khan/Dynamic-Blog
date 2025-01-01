'use client'
import React from "react";
import Image from "next/image";
import CommentSection from "@/components/commentsection";
import AuthorCards from "@/components/authorcard";

    const posts = [
            {
                id:"1",
                title:"Web Development",
                description: "Web development is the process of creating websites and web applications that run on the internet or intranet. It involves a combination of coding, design, and technical expertise to build interactive, user-friendly platforms that cater to various needs—whether it's a personal blog, an ecommerce site, or a social media platform. 1. Frontend Development This is the part of the website that users interact with directly. It involves: Languages and Tools: HTML, CSS, JavaScript, and frameworks like React, Angular, or Vue.js.Responsibilities: Designing the layout, ensuring responsiveness, and improving user experience (UX).2. Backend DevelopmentThe backend is the server side that manages data and ensures functionality. It involves: Languages and Tools: Node.js, Python, PHP, Ruby, and databases like MySQL, MongoDB.Responsibilities: Handling server logic, APIs, database management, and ensuring security.3. Full-Stack DevelopmentFull-stack developers handle both frontend and backend, offering end-to-end solutions for web projects.",
    
                image:"/images/img1.png"
            },
            {
                id:"2",
                title:"Next.js",
                description:"Next.js is a popular open-source framework built on top of React.js, designed to make building modern, fast, and scalable web applications easier. It provides developers with tools for server-side rendering, static site generation, API routes, and much more, offering a flexible and optimized way to build React applications.Key Features of Next.js:Server-Side Rendering (SSR):Next.js supports SSR, which means that pages can be pre-rendered on the server before they are sent to the client. This improves performance and SEO by ensuring that the content is visible to search engines and users as quickly as possible.Static Site Generation (SSG):Next.js allows you to generate static pages at build time, which can then be served from a CDN, improving page load times and scalability. It's ideal for content-heavy sites, blogs, or documentationIncremental Static Regeneration (ISR):ISR allows you to update static content on the fly without rebuilding the entire site. It ensures that your static pages stay fresh while maintaining the performance benefits of static generation.File-based Routing:Next.js uses a file-based routing system, where the file structure in the pages directory corresponds to the routes in yourapplication. This simplifies routing and reduces the need for additional configuration.API Routes:Next.js provides built-in API routes, allowing you to build backend functionality within your application. You can create serverless functions for tasks like handling forms, accessing databases, or integrating with external APIs.Automatic Code Splitting:Next.js automatically splits your code into smaller chunks, ensuring that only the necessary JavaScript is loaded for each page. This reduces the initial page load time and improves performance.TypeScript Support:Next.js comes with built-in TypeScript support, making it easier for developers to write strongly-typed applications. You can start using TypeScript out of the box without additional configuration.Optimized Image Handling:Next.js includes an optimized image component (next/image) that automatically optimizes and resizes images, improving performance and user experience.Internationalization (i18n) Support:Next.js has built-in support for internationalized routing, making it easier to build multi-language applications and websites.",
                image:"/images/img2.jpg"
            },
            {
                id:"3",
                title:"Agentic AI",
                description:"Agentic AI refers to a type of artificial intelligence that can independently make decisions and solve complex problems through strategic thinking and multi-step planning. These systems are designed to take actions without human intervention, interacting with the environment, and solving issues autonomously.Key Features of Agentic AI:Autonomous Functionality: Agentic AI systems make decisions and interact with their environment without human involvement.Problem-Solving Capabilities: These systems break down complex issues into smaller tasks, using advanced planning and execution to find solutions.Diverse Applications: Agentic AI is used in various sectors, including supply chain optimization, cybersecurity vulnerability analysis, and medical assistance.Benefits of Agentic AI:Increased Efficiency: These systems operate quickly and efficiently, improving productivity and performance without human oversight.Resource Saving: By automating decision-making, Agentic AI reduces the need for human resources, allowing teams to focus on other critical tasks.Comprehensive Problem-Solving: Agentic AI tackles problems in a thorough, methodical way, providing better, more holistic solutions.Examples of Agentic AI:NVIDIA's Blueprints: NVIDIA has introduced Blueprints as an example of Agentic AI, designed to autonomously solve complex problems.Google's Gemini 2.0: Googles AI model, Gemini 2.0, is part of the “Agentic era,” built to address intricate challenges with autonomy.",
                image:"/images/img3.jpg"
            },
            {
                id:"4",
                title:"Cyber Security",
                description:"Cybersecurity refers to the practice of protecting computer systems, networks, and data from digital attacks, theft, damage, or unauthorized access. It is essential to safeguard information from cyber threats such as hacking, phishing, malware, and ransomware. With the increasing reliance on digital platforms, cybersecurity has become a critical component for individuals, businesses, and governments alike.Key Areas of Cybersecurity:Network Security Focuses on protecting computer networks from unauthorized access, data breaches, and threats.Techniques include firewalls, intrusion detection systems (IDS), and encryption.Information SecurityEnsures the confidentiality, integrity, and availability of data, both in storage and during transmission.This involves encryption, access controls, and secure data storage practices.Application SecurityEnsures that software applications are free from vulnerabilities that attackers can exploit.This includes secure coding practices, regular patching, and vulnerability testing.Endpoint SecurityProtects individual devices like smartphones, laptops, and desktops from threats.This can include antivirus software, device encryption, and monitoring of suspicious activities.Identity and Access Management (IAM)Focuses on managing users' identities and their access to systems and data.Includes tools like multi-factor authentication (MFA) and role-based access control (RBAC).Cloud SecurityEnsures the protection of data and systems hosted on cloud platforms Cloud security involves encryption, secure APIs, and proper configuration of cloud resources.Incident Response and RecoveryInvolves detecting and responding to cyber threats, minimizing damage, and recovering from cyber incidents.This includes creating incident response plans, conducting drills, and implementing disaster recovery procedures.Common Cyber Threats:Phishing:A method of tricking individuals into revealing sensitive information (like passwords or credit card details) by pretending to be a trustworthy entity.Malware:Malicious software designed to damage or disrupt systems, steal data, or gain unauthorized access to networks.Ransomware:",
                image:"/images/img4.jpg"
            },
            {
                id:"5",
                title:"Graphic Designing",
                description:"Graphic design is the art and practice of creating visual content to communicate messages. By combining typography, imagery, color, and layout techniques, graphic designers craft designs that effectively communicate information and evoke emotions. Graphic design is used in a wide range of mediums, including print, digital, and social media, and is integral to branding, advertising, packaging, web design, and more.Types of Graphic Design:Visual Identity Design:This type of design focuses on the creation of branding elements like logos, business cards, and color schemes that represent a companys identity. It includes building the visual representation of a brand.Marketing and Advertising Design:Designers working in marketing and advertising create visuals for campaigns such as banners, posters, social media graphics, email templates, and print ads. These designs aim to capture attention and drive consumer action.Web and User Interface (UI) Design:Web design is focused on creating visually appealing, user-friendly websites. It includes designing elements like buttons, icons, layouts, and color schemes that improve user experience (UX).Packaging Design:Packaging design is about creating product packaging that attracts consumers while communicating information about the product. It involves designing labels, boxes, and packaging for physical products.Motion Graphics:Motion graphics design focuses on creating animated visual elements, often used in videos, ads, and digital media. It combines graphic design with animation and video editing to produce engaging content.Publication Design:Publication designers create layouts for printed materials like books, magazines, brochures, and newspapers. They balance text and images to create visually compelling and readable publications Environmental Design:Environmental graphic design involves designing signage, wayfinding systems, and murals to enhance physical spaces. It can include designs for retail stores, exhibitions, museums, and public spaces.",
                image:"/images/img5.webp"
            },
            {
                id:"6",
                title:"Digital Marketing",
                description:"Digital Marketing is the art and science of using digital channels to promote products, services, or brands. In todays technology-driven world, digital marketing has become one of the most effective ways to connect with target audiences, build brand awareness, and drive business growth.This field encompasses various strategies and techniques, including social media marketing, search engine optimization (SEO), email marketing, content creation, pay-per-click advertising (PPC), and more. Digital marketing allows businesses to reach a global audience, track campaign performance in real-time, and create personalized experiences for customers.Key Components of Digital MarketingSearch Engine Optimization (SEO): Enhancing a websites visibility on search engines like Google to attract organic traffic.Social Media Marketing: Promoting brands on platforms like Facebook, Instagram, LinkedIn, and TikTok to engage audiences and increase brand loyalty.Content Marketing: Creating valuable, relevant content to attract and retain a defined audience, such as blogs, videos, and infographics.Email Marketing: Building relationships with customers through personalized and targeted email campaigns.Pay-Per-Click (PPC) Advertising: Running paid ads on platforms like Google Ads or social media to drive traffic and sales.Affiliate Marketing: Partnering with affiliates who promote your products in exchange for a commission.Analytics and Reporting: Measuring the success of campaigns using tools like Google Analytics to optimize future strategies.",
                image:"/images/img6.jpg"
            },
    ]
    export default function Pages({ params }:{params:{id:string}}){
        const { id } = params;
        const post = posts.find((p) =>p.id === id);

        if(!post) {
            return(
                <h2 className="text-2xl font-bold text-center mt-10">Post not found</h2>
            )
        }

        const renderParagraphs = (CardDescription:string) =>{
    return CardDescription.split("/n").map((para, index)=>(
        <p key={index} className="mt-4 text-justify">
            {para.trim()}
        </p>
    ))
};

   return(
    <div className="max-w-3xl mx-auto p-5 bg-white/75">
        <h1 className="md:text-4xl text-3xl font-bold text-black text-center">
            {" "}
           {post.title}
        </h1>

        {post.image && (
            <Image
            src={post.image}
            alt={post.title}
            width={500}
            height={500}
            className="w-full h-auto rounded-md mt-4"
            />
        ) }
        <div className="mt-6 text-lg text-slate-600">
            {renderParagraphs(post.description)}
        </div>
        <AuthorCards/>
        <CommentSection/>
    </div>
   )
}