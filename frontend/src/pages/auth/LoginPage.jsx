const LoginPage = () => {
  return (
    <div className="w-[450px] max-sm:w-[100%] bg-primary-color border rounded-lg h-[570px] flex flex-col gap-8 text-white p-8 max-sm:px-4">
      <div className="">
        <p className="text-lg font-medium tracking-wider">
          J’ai déjà un compte
        </p>
      </div>
      <div className="">
        <p className="text-2xl text-secondary-blue font-bold tracking-wider">
          SE CONNECTER
        </p>
      </div>
      <div className="flex flex-col gap-2 ">
        <label className="font-bold">Email</label>
        <input
          type="email"
          className="p-2 rounded-lg text-black outline-none focus:scale-[0.98] border"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="font-bold">Password</label>
        <input
          type="password"
          className="p-2 rounded-lg text-black outline-none focus:scale-[0.98] border"
        />
      </div>
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          className="size-4"
          name=""
          id="Se souvenir de moi"
        />
        <label
          htmlFor="Se souvenir de moi"
          className="text-lg font-bold cursor-pointer"
        >
          Se souvenir de moi
        </label>
      </div>
      <div className="bg-white text-primary-color center p-2 cursor-pointer rounded-full">
        <span className="text-xl font-bold">Se connecter</span>
      </div>
      <a className="center font-semibold tracking-wide underline">
        Mot de passe oublie?
      </a>
    </div>
  );
};

export default LoginPage;
