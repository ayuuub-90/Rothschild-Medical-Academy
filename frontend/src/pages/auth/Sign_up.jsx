const Sign_up = () => {
  return (
    <div className="w-[450px] max-sm:w-[100%] max-sm:px-4 bg-secondary-orange border-primary-orange border-2 rounded-lg h-[570px] flex flex-col gap-8 p-8 text-primary-color">
      <div className="">
        <p className="text-lg font-medium tracking-wider">
          Je n’ai pas de compte
        </p>
      </div>
      <div className="">
        <p className="text-2xl text-primary-orange font-bold tracking-wider">
          CRÉER UN COMPTE
        </p>
      </div>
      <div className="flex flex-col gap-2 ">
        <label className="font-bold">Entrez votre e-mail ici *</label>
        <input
          type="email"
          className="border p-2 rounded-lg text-black outline-none focus:scale-[0.98] "
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="font-bold">Entrez à nouveau votre e-mail ici *</label>
        <input
          type="password"
          className="border p-2 rounded-lg text-black outline-none focus:scale-[0.98] "
        />
      </div>
      <div className="flex items-center gap-2">
        <input type="checkbox" className="size-4" name="" id="Je certifie être un professionnel de santé" />
        <label className="text-lg font-bold cursor-pointer" htmlFor="Je certifie être un professionnel de santé">
          Je certifie être un professionnel de santé
        </label>
      </div>
      <div className="text-white button-hover bg-primary-color center p-2 cursor-pointer rounded-full">
        <span className="text-xl font-bold">Creer un compte</span>
      </div>
    </div>
  );
};

export default Sign_up;
