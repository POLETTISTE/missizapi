// import Image from "next/image";
// import Link from "next/link";
import React from "react";
import essai from "../public/assets/prestations/essai.jpeg";

import PrestationItem from "./PrestationItem";

const Prestations = () => {
  return (
    <div id="portfolio" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-20">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]"></p>
        <h2>Prestations</h2>
        <br />
        <div className="grid md:grid-cols-2 gap-8">
          <PrestationItem
            name="Hrnet App"
            backgroundImg={essai}
            url="/essai"
            family="epilation"
          />
          <PrestationItem
            name="Argent Bank App"
            backgroundImg={essai}
            url="/essai"
            family="epilation"
          />
          <PrestationItem
            name="SportSee App"
            backgroundImg={essai}
            url="/sportSee"
            family="epilation"
          />
          <PrestationItem
            name="Kasa App"
            backgroundImg={essai}
            url="/kasa"
            family="epilation"
          />
          <PrestationItem
            name="Fisheye"
            backgroundImg={essai}
            url="/fisheye"
            family="epilation"
          />
          <PrestationItem
            name="Les Petits Plats"
            backgroundImg={essai}
            url="/lespetitsplats"
            family="epilation"
          />
          <PrestationItem
            name="GameOn"
            backgroundImg={essai}
            url="/gameon"
            family="epilation"
          />
          <PrestationItem
            name="Booki"
            backgroundImg={essai}
            url="/booki"
            family="epilation"
          />
        </div>
      </div>
    </div>
  );
};

export default Prestations;
