import { Link } from "react-router-dom";
import Cover from "../../components/Cover";

const Event = () => {
  return (
    <>
      <Cover />
      <div className="px-14 max-xl:px-2 py-14 center flex-col">
        <div className="bg-primary-gray w-full flex justify-between items-center p-4 rounded max-lg:flex-col">
          <div className="flex flex-col">
            <p className="font-mono text-gray-500 text-lg">
              <strong className="text-primary-color">08 février 2024</strong>{" "}
              18:30 à 19:30
            </p>
            <p className="font-bold text-[22px]">
              Stimulation médullaire et douleur chronique : quelles innovations?
            </p>
          </div>
          <Link
            to={"/event/id"}
            className="button-hover button-hover bg-primary-color text-white font-bold text-lg rounded-full px-6 py-2 max-sm:text-sm max-lg:mt-4 max-lg:w-full max-lg:text-center"
          >
            Voir le programme
          </Link>
        </div>

        <div className="bg-blue-50 w-full h-[600px] max-md:h-[400px] max-sm:h-[300px] center">
          <iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/7Qrh7dbyMHo?si=J5fdoWyIp8TrbmhL"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowfullscreen="allowfullscreen"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Event;
