import { Link } from "react-router-dom";
import { asset } from "../../assets/asset.js";
import Cover from "../../components/Cover.jsx";
import Partners from "../../components/Partners.jsx";

const EventDetails = () => {
  return (
    <>
      <Cover />
      <div className="w-full center my-14 max-sm:my-1">
        <div className="h-full w-[950px]">
          <div className="flex max-md:flex-col w-full">
            <img
              src={asset.thumbnail_echanges_neuro}
              alt="thumbnail"
              className="w-1/2 rounded-md max-md:w-full max-md:p-4"
            />
            <div className="w-1/2 max-md:w-full p-4 flex flex-col gap-5">
              <p className="text-primary-color text-2xl font-mono">
                <strong>30 janv. 2024</strong> 19:00 à 20:30
              </p>
              <strong className="text-3xl text-gray-800">
                #1 Myopie - #2 Orbite, paupières et myopie forte
              </strong>
            </div>
          </div>

          <div className="flex justify-between bg-primary-gray py-8 px-4 my-16 rounded-md">
            <div className="flex gap-2 items-center text-primary-color text-xl font-medium max-sm:text-[18px]">
              <img src={asset.icon_eye} className="size-8 max-sm:size-6" />
              <p>Ophtalmologie</p>
            </div>
            <Link
              to={"/event/id/replay"}
              className="button-hover button-hover bg-primary-color text-white font-bold text-lg rounded-full px-4 py-2 max-sm:text-sm"
            >
              Voir le replay
            </Link>
          </div>

          <div className="h-auto">
            <p className="text-primary-color text-2xl tracking-wide p-2">
              Orateurs
            </p>
            <div className="center m-4">
              <div className="h-auto p-2 grid grid-cols-4 max-md:grid-cols-2 gap-10 max-sm:grid-cols-2 items-center ">
                <div className="mb-10">
                  <img
                    src={asset.unknown_user}
                    className="rounded-full border-b-8 border-secondary-blue "
                  />
                  <p className="text-primary-orange text-xl text-center font-medium pt-2 max-w-[170px] max-md:text-sm ">
                    Dr Nicolas ENGRAND
                  </p>
                </div>
                <div className="mb-10">
                  <img
                    src={asset.unknown_user}
                    className="rounded-full border-b-8 border-secondary-blue "
                  />
                  <p className="text-primary-orange text-xl text-center font-medium pt-2 max-w-[170px] max-md:text-sm ">
                    Dr Nicolas ENGRAND
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full py-9 mb-16 bg-secondary-blue center relative overflow-hidden">
        <div className="w-[700px] h-1/2 ">
          <p className="text-primary-color text-2xl pb-4 px-2">Programme:</p>
          <div className="px-10 max-md:px-2 max-sm:flex max-sm:flex-col">
            <span className="text-primary-orange font-mono text-xl px-2 ">
              09:00
            </span>
            <span className="font-medium text-xl px-2">
              Comprendre les enjeux de la fin de vie
            </span>
          </div>
        </div>
        <div className="absolute rounded-full bg-thirt-orange size-24 -top-11 left-44 max-lg:hidden"></div>
        <div className="absolute rounded-full bg-primary-color size-56 -bottom-32 right-44 max-lg:hidden"></div>
      </div>

      <Partners />
    </>
  );
};

export default EventDetails;
