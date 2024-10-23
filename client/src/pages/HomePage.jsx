import { Link } from "react-router-dom";

function HomePage() {
  return (
  <section className="bg-zinc-500 flex justify-center items-center">
    <header className="bg-zinc-800 p-10">
      <h1 className="text-5xl py-2 font-bold">CODIGAPP</h1>
      <p className="text-md text-slate-400">
       Plataforma de registro de los códigos encontrados por la compra de los productos Detodito
      </p>

      <Link
        className="bg-zinc-500 text-white px-4 py-2 rounded-md mt-4 inline-block"
        to="/login"
      >
        Iniciar
      </Link>
    </header>
  </section>
  );
}

export default HomePage;
