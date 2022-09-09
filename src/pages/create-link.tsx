import React, { useLayoutEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import api from "../services/api";
import logo from "../assets/logo.svg";

export default function GetLink() {
  const [erro, setErro] = useState<Boolean>();



  // const code = useLocation();

  useLayoutEffect(() => {

    //get pararm from url
    const code = window.location.pathname.replace("/", "");

    api
      .get(`/links/${code}`)
      .then((response) => {
        setTimeout(() => {
          window.location.replace(response.data.url || 'https://onlinetelecom.com.br/404');
        }, 2000);
      })
      .catch((error) => {
        window.location.replace('https://onlinetelecom.com.br/404')
      });
  }, []);

  return (
    <main className="bg-slate-900 w-screen h-screen">
      <div className="flex flex-col items-center justify-center h-full">
        <img src={logo} alt="logo" className="w-72 h-72" />
      </div>
    </main>
  );
}
