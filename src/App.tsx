import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Rotas from "./services/Rotas";

function App() {


  return (

    <Rotas />
    // <main className="bg-slate-900 h-screen">
    //   <div className="container mx-auto h-full flex flex-col justify-center items-center">
    //     <h1>ShortOn</h1>

    //    <div className="flex flex-col my-5">
    //     <label htmlFor="link" className="m-0 text-gray-300 text-lg">Digite seu link para encurtar</label>
    //    <input className="p-2 m-0 rounded-md  w-96 mt-2 focus:outline-blue-300 outline-1 duration-300 placeholder:text-gray-400" id="link" placeholder="Digite link" />
    //    </div>

    //     <footer className="flex items-center gap-2 flex-row">
    //       <button className="bg-green-700 hover:bg-green-800 hover:text-gray-50 duration-150 text-white rounded-md p-2 ">Testar Link</button>
    //       <button className="bg-purple-600 hover:bg-purple-800 hover:text-gray-50 duration-150 text-white rounded-md p-2 ">Salvar</button>
    //     </footer>
    //   </div>
    // </main>
  );
}

export default App;
