import { asset } from "../assets/asset";

const Cover = () => {
  return (
    <div>
      <img
        src={asset.banner_img}
        alt="banner"
        className="h-[100px] w-full object-cover object-right-top  "
      />
    </div>
  );
};

export default Cover;
