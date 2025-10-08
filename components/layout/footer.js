import dayjs from "dayjs";

const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="container w-full mx-auto flex items-center justify-center px-2 py-4 text-sm md:py-5 text-gray-300 font-light">
        Copyright &#169; {dayjs().format("YYYY")} Green Energy Project
      </div>
    </footer>
  );
};

export default Footer;
