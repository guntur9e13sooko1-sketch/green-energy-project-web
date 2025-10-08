import Image from "next/image";
import Link from "next/link";

const Content = ({ category, title, link, image }) => {
  return (
    <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink  text-white">
      <div className="flex-1 bg-gray-900  rounded-t rounded-b-none overflow-hidden shadow-lg">
        <div className="flex flex-wrap no-underline hover:no-underline">
          <Image
            src={image}
            className="h-64 w-full rounded-t pb-6"
            width={0}
            height={0}
            alt={title}
            unoptimized
          />
          <div className="w-full flex items-center justify-center">
            <p className=" text-black text-xs md:text-sm  text-center rounded-full mt-2 px-2 bg-gradient-to-r from-white to-gray-500">
              {category}
            </p>
          </div>
          <div className="w-full font-bold text-xl mt-6 px-6 pb-10 text-gray-300 hover:text-white">
            <Link href={link}>{title}</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Content;
