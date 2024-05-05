/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const EventCard = ({ thumbnail, icon, title, specialist }) => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="bg-primary-gray m-2 max-w-[450px] rounded-md overflow-hidden flex flex-col justify-between">
      <img src={thumbnail} className="w-full " />
      <div className="p-4 pr-10">
        <p className="text-[25px] pb-2 font-semibold">{title}</p>
        <span className="text-primary-color text-xl font-mono">
          <strong>11 avr. 2024</strong> 09:00 à 10:00
        </span>
        <p className="text-gray-500 text-lg pb-2">
          Dr Nicolas Engrand, Pr Pierre-François PERRIGAULT.
        </p>
        <div className="p-3 pr-6 flex items-center gap-3 text-primary-color font-bold ">
          <img src={icon} alt="" className="size-10" />
          <p>{specialist} </p>
        </div>
      </div>
      <div className="flex gap-3 p-4">
        {user ? (
          <Link
            to={"/event/id/replay"}
            className="button-hover bg-primary-color text-white font-bold text-lg rounded-full px-4 py-2 "
          >
            Voir le replay
          </Link>
        ) : (
          <Link
            to={"/login"}
            className="button-hover bg-primary-color text-white font-bold text-lg rounded-full px-4 py-2 "
          >
            Se connecter
          </Link>
        )}

        <Link
          to={"/event/id"}
          className="bg-white font-bold text-lg rounded-full px-4 py-2 text-primary-color border border- secondary-button-hover"
        >
          En savoir plus
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
