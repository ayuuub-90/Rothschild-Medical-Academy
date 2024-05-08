import { useEffect, useState } from "react";
import { asset } from "../../assets/asset";
import Cover from "../../components/Cover";
import Partners from "../../components/Partners";
import EventCard from "./EventCard";
import { FaFilter } from "react-icons/fa";
import { GoTriangleRight, GoTriangleDown } from "react-icons/go";
import { IoMdClose } from "react-icons/io";
import Loading from "../../components/Loading";

const EventReplays = () => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(true);
  const [isOrateurOpen, setIsOrateurOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  function handleClose(e) {
    if (e.target.id === "sideBarFilter") {
      setIsFilterOpen(false);
    }
  }

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setInterval(() => setLoading(false), 1000);
  }, []);

  if (loading) {
    return (
      <div className="h-[80vh] ">
        <Loading />
      </div>
    );
  }

  return (
    <>
      <Cover />
      <div className="center mb-8">
        <div className="w-[78%] max-lg:w-[95%] max-md:center my-4 pt-6 relative">
          <img
            src={asset.ellipse}
            alt=""
            className="absolute size-20 -z-10 max-md:size-14 -left-10 max-md:left-4"
          />
          <h1 className="text-5xl font-bold max-md:text-3xl max-sm:text-xl pb-20 max-md:pb-6">
            Événements en replay
          </h1>
          <div className="flex justify-around max-lg:flex-col">
            <div className="w-[400px] max-lg:hidden  flex flex-col gap-8 ">
              <div className="bg-primary-color text-white font-medium p-4 w-full flex items-center">
                Filter par:
              </div>
              <div className="text-primary-orange tracking-wide underline ">
                Réinitialiser
              </div>

              <div className="">
                <span
                  onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                  className="font-bold tracking-wide flex items-center gap-2 hover:underline cursor-pointer"
                >
                  {isCategoryOpen ? (
                    <GoTriangleDown size={20} />
                  ) : (
                    <GoTriangleRight size={20} />
                  )}
                  CATÉGORIES
                </span>
                {isCategoryOpen ? (
                  <div className="flex flex-col gap-4 m-3 text-gray-800">
                    <div className="flex gap-2 items-center">
                      <input
                        type="checkbox"
                        className="size-4"
                        id="Ophtalmologie"
                      />
                      <label htmlFor="Ophtalmologie">Ophtalmologie</label>
                    </div>
                    <div className="flex gap-2 items-center">
                      <input
                        type="checkbox"
                        className="size-4"
                        id="Neurochirurgie"
                      />
                      <label htmlFor="Neurochirurgie">Neurochirurgie</label>
                    </div>
                    <div className="flex gap-2 items-center">
                      <input
                        type="checkbox"
                        className="size-4"
                        id="Multi-spécialité"
                      />
                      <label htmlFor="Multi-spécialité">Multi-spécialité</label>
                    </div>
                    <div className="flex gap-2 items-center">
                      <input type="checkbox" className="size-4" id="ORL" />
                      <label htmlFor="ORL">ORL</label>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>

              <div className="">
                <span
                  onClick={() => setIsOrateurOpen(!isOrateurOpen)}
                  className="font-bold tracking-wide flex items-center gap-2 hover:underline cursor-pointer"
                >
                  {isOrateurOpen ? (
                    <GoTriangleDown size={20} />
                  ) : (
                    <GoTriangleRight size={20} />
                  )}
                  ORATEURS
                </span>
                {isOrateurOpen ? (
                  <div className="flex flex-col gap-4 m-3 text-gray-800">
                    <div className="flex gap-2 items-center">
                      <input
                        type="checkbox"
                        className="size-4"
                        id="Dr Duliver Ammet"
                      />
                      <label htmlFor="Dr Duliver Ammet">Dr Duliver Ammet</label>
                    </div>
                    <div className="flex gap-2 items-center">
                      <input
                        type="checkbox"
                        className="size-4"
                        id="Dr Gargouri Ali"
                      />
                      <label htmlFor="Dr Gargouri Ali">Dr Gargouri Ali</label>
                    </div>
                    <div className="flex gap-2 items-center">
                      <input
                        type="checkbox"
                        className="size-4"
                        id="Dr Bruneau Sebastien"
                      />
                      <label htmlFor="Dr Bruneau Sebastien">
                        Dr Bruneau Sebastien
                      </label>
                    </div>
                    <div className="flex gap-2 items-center">
                      <input
                        type="checkbox"
                        className="size-4"
                        id="Dr Hage Rabin"
                      />
                      <label htmlFor="Dr Hage Rabin">Dr Hage Rabin</label>
                    </div>
                    <div className="flex gap-2 items-center">
                      <input
                        type="checkbox"
                        className="size-4"
                        id="Dr Duliver Ammet"
                      />
                      <label htmlFor="Dr Duliver Ammet">Dr Duliver Ammet</label>
                    </div>
                    <div className="flex gap-2 items-center">
                      <input
                        type="checkbox"
                        className="size-4"
                        id="Dr Gargouri Ali"
                      />
                      <label htmlFor="Dr Gargouri Ali">Dr Gargouri Ali</label>
                    </div>
                    <div className="flex gap-2 items-center">
                      <input
                        type="checkbox"
                        className="size-4"
                        id="Dr Bruneau Sebastien"
                      />
                      <label htmlFor="Dr Bruneau Sebastien">
                        Dr Bruneau Sebastien
                      </label>
                    </div>
                    <div className="flex gap-2 items-center">
                      <input
                        type="checkbox"
                        className="size-4"
                        id="Dr Hage Rabin"
                      />
                      <label htmlFor="Dr Hage Rabin">Dr Hage Rabin</label>
                    </div>
                    <div className="flex gap-2 items-center">
                      <input
                        type="checkbox"
                        className="size-4"
                        id="Dr Duliver Ammet"
                      />
                      <label htmlFor="Dr Duliver Ammet">Dr Duliver Ammet</label>
                    </div>
                    <div className="flex gap-2 items-center">
                      <input
                        type="checkbox"
                        className="size-4"
                        id="Dr Gargouri Ali"
                      />
                      <label htmlFor="Dr Gargouri Ali">Dr Gargouri Ali</label>
                    </div>
                    <div className="flex gap-2 items-center">
                      <input
                        type="checkbox"
                        className="size-4"
                        id="Dr Bruneau Sebastien"
                      />
                      <label htmlFor="Dr Bruneau Sebastien">
                        Dr Bruneau Sebastien
                      </label>
                    </div>
                    <div className="flex gap-2 items-center">
                      <input
                        type="checkbox"
                        className="size-4"
                        id="Dr Hage Rabin"
                      />
                      <label htmlFor="Dr Hage Rabin">Dr Hage Rabin</label>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="px-2 flex justify-end">
              <div
                className="bg-primary-color rounded max-lg:flex items-center gap-2 max-sm:text-sm hidden text-white font-medium p-4 cursor-pointer"
                onClick={() => setIsFilterOpen(true)}
              >
                <FaFilter />
                <p>Filtrer les résultats</p>
              </div>
            </div>
            <div className="grid grid-cols-2 max-sm:grid-cols-1 pt-0 max-md:w-full ">
              <EventCard
                icon={asset.icon_caduce}
                thumbnail={asset.thumbnail_Pr_Perrigaut}
                title={"Comprendre les enjeux de la fin de vie"}
                specialist={"Multi-spécialité"}
              />
              <EventCard
                icon={asset.icon_caduce}
                thumbnail={asset.thumbnail_Pr_Perrigaut}
                title={"Comprendre les enjeux de la fin de vie"}
                specialist={"Multi-spécialité"}
              />
              <EventCard
                icon={asset.icon_caduce}
                thumbnail={asset.thumbnail_Pr_Perrigaut}
                title={"Comprendre les enjeux de la fin de vie"}
                specialist={"Multi-spécialité"}
              />
              <EventCard
                icon={asset.icon_caduce}
                thumbnail={asset.thumbnail_Pr_Perrigaut}
                title={"Comprendre les enjeux de la fin de vie"}
                specialist={"Multi-spécialité"}
              />
            </div>
          </div>
        </div>
      </div>
      <Partners />

      {/* filter side */}
      {isFilterOpen && (
        <div
          id="sideBarFilter"
          onClick={handleClose}
          className="fixed inset-0 bg-black bg-opacity-50 hidden max-lg:block"
        >
          <div className="bg-white min-w-[60%] max-lg:w-[40%] h-full overflow-auto">
            <div className="bg-primary-color text-white font-medium p-4 w-full flex justify-between items-center">
              <span>Filter par:</span>
              <IoMdClose
                className="cursor-pointer"
                onClick={() => setIsFilterOpen(false)}
              />
            </div>
            <div className="text-primary-orange tracking-wide underline p-4 ">
              Réinitialiser
            </div>
            <span className="font-bold tracking-wide p-4 ">CATÉGORIES</span>
            <div className="flex flex-col gap-4 m-3 text-gray-700">
              <div className="flex gap-2 items-center">
                <input type="checkbox" className="size-4" id="Ophtalmologie" />
                <label htmlFor="Ophtalmologie">Ophtalmologie</label>
              </div>
              <div className="flex gap-2 items-center">
                <input type="checkbox" className="size-4" id="Neurochirurgie" />
                <label htmlFor="Neurochirurgie">Neurochirurgie</label>
              </div>
              <div className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  className="size-4"
                  id="Multi-spécialité"
                />
                <label htmlFor="Multi-spécialité">Multi-spécialité</label>
              </div>
              <div className="flex gap-2 items-center">
                <input type="checkbox" className="size-4" id="ORL" />
                <label htmlFor="ORL">ORL</label>
              </div>
            </div>
            <span className="font-bold tracking-wide p-4 flex items-center gap-2">
              ORATEURS
            </span>
            <div className="flex flex-col gap-4 m-3 text-gray-800">
              <div className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  className="size-4"
                  id="Dr Duliver Ammet"
                />
                <label htmlFor="Dr Duliver Ammet">Dr Duliver Ammet</label>
              </div>
              <div className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  className="size-4"
                  id="Dr Gargouri Ali"
                />
                <label htmlFor="Dr Gargouri Ali">Dr Gargouri Ali</label>
              </div>
              <div className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  className="size-4"
                  id="Dr Bruneau Sebastien"
                />
                <label htmlFor="Dr Bruneau Sebastien">
                  Dr Bruneau Sebastien
                </label>
              </div>
              <div className="flex gap-2 items-center">
                <input type="checkbox" className="size-4" id="Dr Hage Rabin" />
                <label htmlFor="Dr Hage Rabin">Dr Hage Rabin</label>
              </div>
              <div className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  className="size-4"
                  id="Dr Duliver Ammet"
                />
                <label htmlFor="Dr Duliver Ammet">Dr Duliver Ammet</label>
              </div>
              <div className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  className="size-4"
                  id="Dr Gargouri Ali"
                />
                <label htmlFor="Dr Gargouri Ali">Dr Gargouri Ali</label>
              </div>
              <div className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  className="size-4"
                  id="Dr Bruneau Sebastien"
                />
                <label htmlFor="Dr Bruneau Sebastien">
                  Dr Bruneau Sebastien
                </label>
              </div>
              <div className="flex gap-2 items-center">
                <input type="checkbox" className="size-4" id="Dr Hage Rabin" />
                <label htmlFor="Dr Hage Rabin">Dr Hage Rabin</label>
              </div>
              <div className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  className="size-4"
                  id="Dr Duliver Ammet"
                />
                <label htmlFor="Dr Duliver Ammet">Dr Duliver Ammet</label>
              </div>
              <div className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  className="size-4"
                  id="Dr Gargouri Ali"
                />
                <label htmlFor="Dr Gargouri Ali">Dr Gargouri Ali</label>
              </div>
              <div className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  className="size-4"
                  id="Dr Bruneau Sebastien"
                />
                <label htmlFor="Dr Bruneau Sebastien">
                  Dr Bruneau Sebastien
                </label>
              </div>
              <div className="flex gap-2 items-center">
                <input type="checkbox" className="size-4" id="Dr Hage Rabin" />
                <label htmlFor="Dr Hage Rabin">Dr Hage Rabin</label>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EventReplays;
