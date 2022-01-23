import React, { useState } from "react";
import { GrClose } from "react-icons/gr";
import { AiOutlineSearch } from "react-icons/ai";
import data from "./data.json";
import MobileSehirSecimi from "./MobileSehirSecimi";
export default function Ilceler() {
  const [ilce,setIlce] = useState("false")
  return (
    
      <div className="ilcelerBanner">
      {ilce ? (
      <div className="ilcelerBanner1">
        <div className="ilcelerBanner-1">
          <GrClose className="ilcelerBanner-icon" onClick={() => setIlce("")} />
          <span className="ilcelerBanner-logo">Semt Seçiniz</span>
        </div>
        <div className="ilcelerBanner-2">
          <AiOutlineSearch className="ilcelerBanner-2-icon" />
          <form>
            <input
              type="text"
              placeholder="Ara"
              className="ilcelerBanner-2-input"
            />
          </form>
        </div>
        {data.ilce.map((x, i) => (
          <div key={x.id} className="ilcelerBanner-3">
            <p>{x.ilceName}</p>
          </div>
        ))}
      </div>
      ): (<MobileSehirSecimi/>) }
      </div>
  
  );
}
