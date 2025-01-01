import Image from "next/image"

export default function AuthorCards(){
    return(
        <div className="bg-white/55 shadow-lg rounded-lg p-6 mt-12">
      <div className="flex items-center animation-fadeIn">

        <Image
        src="/images/authorImg.jpg"
        width={100}
        height={100}
        alt="AuthorImage"
        className="rounded-full mr-4 object-contain border-2 border-red-600"
        />

        <div>
            <h3 className="text-xl font-bold">Niba khan</h3>
            <h3 className="text-xl font-bold">Web Developer</h3>
        </div>
      </div>
        </div>
    )
}