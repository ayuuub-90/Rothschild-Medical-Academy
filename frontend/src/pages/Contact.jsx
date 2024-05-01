import { asset } from "../assets/asset";
import Cover from "../components/Cover";

const Contact = () => {
  return (
    <div>
      <Cover />
      <div className="flex justify-around my-10">
        <div className="w-[700px] flex flex-col gap-10 max-md:gap-3 max-md:px-2 relative">
          <img
            src={asset.ellipse}
            alt=""
            className="absolute size-20 -z-10 max-md:size-14 max-md:-left-4 -left-10"
          />
          <h1 className="text-5xl font-bold tracking-wide max-md:tracking-wider max-md:text-3xl">
            Contact
          </h1>
          <div className=" gap-4 flex flex-col">
            <span className="text-primary-color text-2xl tracking-wide max-md:text-lg ">
              Nous contacter
            </span>
            <div className="bg-secondary-blue h-[700px] max-sm:h-[600px] rounded-md flex flex-col justify-between gap-2 p-6 input max-sm:p-2">
              <div className="flex flex-col gap-1">
                <label>Prenom</label>
                <input type="text" />
                <label>Nom</label>
                <input type="text" />
                <label>Email</label>
                <input type="text" />
                <label>Object</label>
                <input type="text" />
                <label>Message</label>
                <textarea
                  className="rounded-xl resize-none outline-none p-2"
                  rows={6}
                  type="text"
                />
              </div>
              <button className="bg-primary-color center font-medium text-lg text-white py-3 px-3 rounded-lg button-hover mt-10">
                Envoyer
              </button>
            </div>
          </div>
        </div>
        <div className="center -z-10 max-lg:hidden">
          <div className="right-0 absolute w-[23rem] h-[40rem] bg-primary-color rounded-tl-full rounded-bl-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
