import React, { useState } from "react";
import { MdArrowDropUp } from "react-icons/md";

export default function CityHomeFood() {
  return (
    <div className="foods">
      <div style={{ marginTop: "15px", padding: 0 }}>
        <MdArrowDropUp
          style={{
            color: "white",

            width: "55px",
            height: "55px",
            objectFit: "cover",

            position: "absolute",
            top: "-35px",
            right: "70%",
          }}
        />
      </div>
      <div className="food">
        <div className="food-2">
          <p>Popüler Aramalar</p>
          <div className="food-grid">
            <span> Döner</span>
            <span> Tatlı</span>
            <span> Pizza</span>
            <span> Lahmacun</span>
            <span> Burger</span>
            <span> Pide</span>
            <span> Pasta</span>
            <span> Çiğ Köfte</span>
            <span> İskender</span>
            <span> Baklava</span>
          </div>
        </div>
        <div className="food-3">
          <p>Mutfak</p>
          <div className="food-grid-1">
            <div className="food-grid-1-img">
              <img src="https://cdn.yemeksepeti.com/App_Themes/cuisines/discover/cig-kofte.png" />
              <span>Çiğ Köfte</span>
            </div>
            <div className="food-grid-1-img">
              <img src="https://cdn.yemeksepeti.com/App_Themes/cuisines/discover/doner.png" />
              <span>Döner</span>
            </div>{" "}
            <div className="food-grid-1-img">
              <img src="https://cdn.yemeksepeti.com/App_Themes/cuisines/discover/burger.png" />
              <span>Burger</span>
            </div>{" "}
            <div className="food-grid-1-img">
              <img src="https://cdn.yemeksepeti.com/App_Themes/cuisines/discover/kebap-turk-mutfagi.png" />
              <span>
                Kebap & <br />
                Türk Mutfağı
              </span>
            </div>{" "}
            <div className="food-grid-1-img">
              <img src="https://cdn.yemeksepeti.com/App_Themes/cuisines/discover/pasta-tatli.png" />
              <span>Tatlı</span>
            </div>{" "}
            <div className="food-grid-1-img">
              <img src="https://cdn.yemeksepeti.com/App_Themes/cuisines/discover/pide.png" />
              <span>
                Pide & <br />
                Lahmacun
              </span>
            </div>{" "}
            <div className="food-grid-1-img">
              <img src="https://cdn.yemeksepeti.com/App_Themes/cuisines/discover/tavuk.png" />
              <span>Tavuk</span>
            </div>{" "}
            <div className="food-grid-1-img">
              <img src="https://cdn.yemeksepeti.com/App_Themes/cuisines/discover/pizza-italyan.png" />
              <span>Pizza</span>
            </div>{" "}
          </div>
        </div>
        <a href="https://www.yemeksepeti.com/malatya/restoran-arama#st:T%C3%BCm%20Restoranlar">
          Tüm Restoranlar
        </a>
      </div>
    </div>
  );
}
