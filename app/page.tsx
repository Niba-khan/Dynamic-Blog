
import CommentSection from "@/components/commentsection";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Blog from "./blog/page";
import Footer from "@/components/footer";

export default function Home() {
  return (
   <div>
    <Navbar/>
   <Hero/>
   <Blog/>
   <CommentSection/>
   <Footer/>
   
   </div>
  );
}
