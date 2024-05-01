import { useState } from "react";
import { asset } from "../assets/asset.js";
import { IoIosMenu } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();
  const pathname = location.pathname;

  return (
    <>
      <div className="flex w-full items-center justify-between px-4 ">
        <Link to={"/"} className="">
          <img src={asset.RMA_logo} alt="logo" />
        </Link>
        <div className="max-xl:hidden block">
          <ul className="flex gap-10 font-normal text-lg text-gray-500">
            <Link
              to={"/"}
              className={`li-hover ${
                pathname === "/"
                  ? "text-primary-color font-bold border-b-2 border-primary-color"
                  : ""
              } `}
            >
              Accueil
            </Link>
            <Link
              to={"/agenda"}
              className={`li-hover ${
                pathname === "/agenda"
                  ? "text-primary-color font-bold border-b-2 border-primary-color"
                  : ""
              } `}
            >
              Événements à venir
            </Link>
            <Link
              to={"/replays"}
              className={`li-hover ${
                pathname === "/replays"
                  ? "text-primary-color font-bold border-b-2 border-primary-color"
                  : ""
              } `}
            >
              Événements en replay
            </Link>
            <Link
              to={"/contact"}
              className={`li-hover ${
                pathname === "/contact"
                  ? "text-primary-color font-bold border-b-2 border-primary-color"
                  : ""
              } `}
            >
              Contact
            </Link>
          </ul>
        </div>
        <div className="max-xl:hidden block">
          <Link
            to={"/login"}
            className="bg-primary-color center font-medium text-lg text-white py-3 px-3 rounded-full button-hover"
          >
            Connexion / Creer un compte
          </Link>
        </div>

        <div className="max-xl:block hidden pr-2">
          <IoIosMenu
            className="size-9 text-primary-color cursor-pointer"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
          {isOpen ? (
            <>
              <div className="border shadow-md w-[360px] h-auto absolute right-0 top-[90px] z-10 bg-white ">
                <ul className="flex flex-col font-medium text-lg text-gray-500">
                  <Link
                  onClick={() => setIsOpen(false)}
                    to={"/"}
                    className="py-2 px-2 hover:bg-gray-100 text-primary-color cursor-pointer border-b "
                  >
                    Accueil
                  </Link>
                  <Link
                    onClick={() => setIsOpen(false)}
                    to={"/agenda"}
                    className="py-2 px-2 hover:bg-gray-100 text-primary-color cursor-pointer border-b "
                  >
                    Événements à venir
                  </Link>
                  <Link
                    onClick={() => setIsOpen(false)}
                    to={"/replays"}
                    className="py-2 px-2 hover:bg-gray-100 text-primary-color cursor-pointer border-b "
                  >
                    Événements en replay
                  </Link>
                  <Link
                    onClick={() => setIsOpen(false)}
                    to={"/contact"}
                    className="py-2 px-2 hover:bg-gray-100 text-primary-color cursor-pointer border-b "
                  >
                    Contact
                  </Link>
                  <Link
                    onClick={() => setIsOpen(false)}
                    to={"/login"}
                    className="py-2 px-2 hover:bg-gray-100 text-primary-color cursor-pointer border-b "
                  >
                    Connexion / Creer un compte
                  </Link>
                </ul>
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
