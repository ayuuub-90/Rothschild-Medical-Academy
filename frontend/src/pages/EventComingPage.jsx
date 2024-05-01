import { asset } from "../assets/asset";
import EventCard from "../components/EventCard";
import Partners from "../components/Partners";
import Cover from "../components/Cover";

const EventComingPage = () => {
  return (
    <>
      <Cover />
      <div className="px-24 max-md:px-2 my-12">
        <div className="w_full">
          <div className="flex justify-between relative">
            <img
              src={asset.ellipse}
              alt=""
              className="absolute size-20 -z-10 max-md:size-14 max-md:left-4 -left-10 top-0"
            />
            <span className="text-5xl font-bold max-md:text-xl pb-4">
              Événements à venir
            </span>
          </div>
          <div className="center border-l-[2px] max-md:border-none border-black">
            <div className="grid grid-cols-3 max-xl:grid-cols-2 max-md:grid-cols-1 pt-0 ">
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
      <Partners />
    </>
  );
};

export default EventComingPage;
