// components/FoodSection.tsx
import Image from "next/image";

export default function About() {
  return (
    <div className=" bg-black/90 h-screen">
    <section className="containermx-auto px-6 py-10 md:flex md:items-center md:justify-between">

      <div className="md:w-1/2">
        <h1 className="text-white text-4xl font-bold mb-6">
         About US
        </h1>
        <p className="text-gray-300 leading-7 mb-4">
        Welcome to [Blog website ]! We are dedicated to providing high-quality, accessible, and practical courses in various fields, designed to help you unlock your potential and advance your career. Whether you,re looking to learn something new, enhance your existing skills, or shift your career into a new direction, our expert-led courses will provide you with the knowledge and hands-on experience to succeed.


        </p>
        <p className="text-gray-300 leading-7">
        Our courses cover a broad spectrum of subjects, from Data Management, Web Development, Cybersecurity, to Graphic Design, and much more. With a focus on delivering valuable skills that are in high demand in today,s job market, our curriculum is carefully crafted by industry professionals to ensure you get the most relevant and up-to-date education.
        </p>
      </div>

      
      <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
        <Image
          src="https://instructor-academy.onlinecoursehost.com/content/images/2023/05/6-Why-Create-Online-Courses-Top-10-Unexpected-Reasons.jpg"
          alt="Roasted Vegetables"
          width={500}
          height={500}
          className="rounded-lg shadow-lg"
        />
      </div>
    </section>
    </div>
  );
}
