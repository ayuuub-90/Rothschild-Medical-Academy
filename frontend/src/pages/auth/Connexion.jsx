import Cover from "../../components/Cover";
import LoginPage from "./LoginPage";
import Sign_up from "./Sign_up";

const connexion = () => {
  return (
    <div>
      <Cover />
      <div className="center ">
        <div className=" max-sm:mx-4">
          <h1 className="text-6xl max-sm:text-4xl max-sm:font-bold font-semibold pt-8 pb-2">Connexion</h1>
          <div className="center max-lg:flex-col gap-6 py-6">
            <LoginPage />
            <Sign_up />
          </div>
        </div>
      </div>
    </div>
  );
};

export default connexion;
