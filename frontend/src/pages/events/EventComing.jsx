import { Link } from "react-router-dom";
import { asset } from "../../assets/asset";
import EventCard from "./EventCard";

const EventComing = () => {
  
  return (
    <div className="px-24 max-md:px-2 my-12">
      <div className="w_full">
        <div className="flex justify-between relative">
          <img
            src={asset.ellipse}
            alt=""
            className="absolute size-20 -z-10 max-md:size-14 max-md:left-4 -left-10 top-0"
          />
          <span className="text-5xl font-bold max-md:text-xl">
            Événements à venir
          </span>
          <Link
            to={"/agenda"}
            className="bg-gray-950 text-white center max-xl:text-center px-4 rounded-full cursor-pointer max-md:text-xs max-md:px-2"
          >
            Voir tous les évènements à venir
          </Link>
        </div>
        <div className="center">
          <div className="grid grid-cols-3 max-xl:grid-cols-2 max-md:grid-cols-1 py-8">
            <EventCard
              icon={asset.icon_caduce}
              thumbnail={asset.thumbnail_Pr_Perrigaut}
              title={"Comprendre les enjeux de la fin de vie"}
              specialist={"Multi-spécialité"}
            />
            <EventCard
              icon={asset.icon_cerveau}
              thumbnail={asset.thumbnail_echanges_ophtalmo}
              title={
                "Stimulation médullaire et douleur chronique : quelles innovations ?"
              }
              specialist={"Neurochirurgie"}
            />
            <EventCard
              icon={asset.icon_eye}
              thumbnail={asset.thumbnail_echanges_neuro}
              title={"#1 Myopie - #2 Orbite, paupières et myopie forte"}
              specialist={"Ophtalmologie"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventComing;
