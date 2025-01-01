import React from "react"
import BlogCard from "@/components/blogcard";

export default function Blog(){
const posts=[
    {
        id:"1",
        title:"Web Development:",
        description:"Web development is a dynamic field that combines creativity and technical skills. Whether you're building a simple blog or a complex web application, mastering web development opens up endless possibilities in the digital world",
        date:"2-23-2024",
        imageUrl:"/images/img1.png"

    },
    {
        id:"2",
        title:"NExt.js",
        description:"Next.js is a powerful framework that extends the capabilities of React by providing server-side rendering, static site generation, and a host of performance optimizations. It simplifies the process of building fast scalable and SEO-friendly web applications making it a popular choice for developers who want to deliver high-quality user experiences",
        date:"2-23-2024",
        imageUrl:"/images/img2.jpg"

    },
    {
        id:"3",
        title:"Agentic AI",
        description:"Agentic AI is a cutting-edge field within artificial intelligence that empowers machines to solve complex problems and make decisions on their own. With its autonomous performance and advanced problem-solving abilities, Agentic AI is revolutionizing various industries by enhancing efficiency and saving resources",
        date:"2-23-2024",
        imageUrl:"/images/img3.jpg"

    },
    {
        id:"4",
        title:"Cybersecurity:",
        description:"Cybersecurity is an ongoing process that requires vigilance and proactive measures to protect digital assets from evolving cyber threats. With the increasing amount of data shared and stored online, understanding the basics of cybersecurity and implementing security practices is vital for individuals and organizations to ensure privacy, security, and trust in the digital world.",
        date:"2-23-2024",
        imageUrl:"/images/img4.jpg"

    },
    {
        id:"5",
        title:"Graphic Designing",
        description:"Graphic design is a powerful field that blends creativity and communication to produce visuals that inform, entertain, and persuade. Whether it's branding, digital marketing, or web design, graphic designers play a crucial role in shaping how we interact with visual content. With the right skills, tools, and knowledge, you can create impactful designs that leave a lasting impression.",
        date:"2-23-2024",
        imageUrl:"/images/img5.webp"

    },
    {
        id:"6",
        title:"Digital Marketing",
        description:"Digital marketing is an ever-evolving field that empowers businesses to stay competitive in a rapidly changing market. By leveraging the power of the internet, brands can build meaningful connections with their audience, drive sales, and create lasting impacts Digital marketing allows businesses to reach a global audience, track campaign performance in real-time, and create personalized experiences for customers",
        date:"2-23-2024",
        imageUrl:"/images/img6.jpg"

    },

]

return(
    <div className="my-8  ">
        <h1 className="text-3xl font-bold text-center my-8 text-gray-400 animate-color-change">
      Our Courses
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
                <div className="fade-in " key={post.id}>
                   <div className="blog-card">
                    <BlogCard post={post} isDarkBackground={index % 2 === 0}/>
                    
                    </div>  
                </div>
            ))}
        </div>
    </div>

    
)
}