import Image from "next/image";


export default function Hero() {
  return (
    <div className="relative bg-cover bg-center h-[35rem] flex items-center justify-center bg-[url('/images/bg.jpg')]">
              {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
      
      {/* Content */}
      <div className="relative text-center px-8 md:px-16 lg:px-32">
        <h1 className="text-3xl md:text-5xl font-bold text-white leading-snug">
          Áll the courses you need in one Place
        </h1>
        <div className="md:flex-none order-2 sm:order-1 flex justify-center py-4 sm:py-0">
  <div className="relative">
    <input
      type="text"
      className="mt-1 block w-80 px-12 py-3 bg-white border border-slate-300 rounded-full text-sm shadow-sm placeholder-slate-500"
      placeholder="Search for anything"
    />
    <Image
      src="https://cdn-icons-png.freepik.com/512/16177/16177190.png" // You can use any search icon here
      alt="Search Icon"
      width={20}
      height={20}
      className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5"
    />
  </div>
</div>

      </div>
    </div>
  );
}
