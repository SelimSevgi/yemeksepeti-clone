import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { GrClose } from "react-icons/gr";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiTwotoneLock,
  AiFillFacebook,
} from "react-icons/ai";
import { HiUserAdd, HiOutlineLocationMarker } from "react-icons/hi";
import { BiChevronRight } from "react-icons/bi";

import CityHomeSlider from "./CityHomeSlider";

import data from "./data.json";
import Ilceler from "./Ilceler";
import mobilMenu from "./MobileBttn";
export default function MobileSehirSecimi() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const [closeBanner, setCloseBanner] = useState("false");
  const [ilce, setIlce] = useState("false");
  const [mblMenu, setMblMenu] = useState("false");
  return (
    <div className="mobilesehirsecimi">
      {" "}
      {ilce  === "false" ? (
        <div className="mobilesehirsecimi-1">
          <div className="mbl-navbar">
            {closeBanner && (
              <div className="mbl-banner">
                <div className="mbl-banner-l">
                  <GrClose
                    style={{ marginRight: 5 }}
                    onClick={() => setCloseBanner("")}
                  />
                  <img
                    src="https://i.hizliresim.com/tu6gk5j.jfif"
                    style={{ marginRight: 5 }}
                  />
                  <div className="mbl-banner-y">
                    <span>Yemeksepeti</span>
                    <span
                      src="https://i.hizliresim.com/tu6gk5j.jfif"
                      style={{ marginRight: 5, fontSize: 12 }}
                    >
                      Yemeksepeti Uygulamasını İndir.
                    </span>
                  </div>
                </div>
                <span style={{ marginRight: 15, color: "#428bca" }}>İNDİR</span>
              </div>
            )}
            <div className="mbl-banner-log">
              <AiOutlineMenu
                style={{
                  color: "white",
                  height: "54px",
                  width: "45px",
                  fontWeight: "700",
                  background: "#fa0050",
                  paddingLeft: "10px",
                }}
                onClick={() => setMblMenu("")}
              />
              <div className="mbl-banner-logo">
                <img src="https://assets.yemeksepeti.com/images/mobile/yemeksepeti-logo.svg" />
              </div>{" "}
            </div>
            <div className="mbl-banner-search">
              <form>
                <input
                  className="mbl-banner-search-input"
                  type="text"
                  id="fname"
                  name="fname"
                  placeholder="Yemek, mutfak veya restoran arayın"
                />
              </form>
              <AiOutlineSearch className="mbl-banner-search-icon" />
            </div>
          </div>

          <div
            className={
              closeBanner ? "mbl-banner-content" : "mbl-banner-content-1"
            }
          >
            <span>
              Merhaba,
              <b>Misafir</b>
            </span>
            <div className="mbl-banner-content-menu">
              <div
                className="mbl-banner-content-menu-1"
                onClick={() => setIlce("")}
              >
                <img src="https://cdn.yemeksepeti.com/App_Themes/images/cocacola_menuler.png?v=v2" />
                <span> Seçilmiş Menüler</span>
              </div>
              <div
                className="mbl-banner-content-menu-1"
                onClick={() => setIlce("")}
              >
                <img src="https://cdn.yemeksepeti.com/App_Themes/images/vodafone_menuler.png?v=v2" />
                <span> Vodafone Menüleri</span>
              </div>
            </div>

            <CityHomeSlider className="mbl-banner-content-sldr" />
            <div className="mbl-banner-content-login">
              <div className="mbl-banner-content-user">
                <div
                  className="mbl-banner-content-user-1"
                  style={{ marginRight: 5 }}
                >
                  <AiTwotoneLock
                    style={{ width: "21px", height: "26px", marginRight: 5 }}
                  />
                  <span>Üye Girişi</span>
                </div>
                <div className="mbl-banner-content-user-1">
                  <HiUserAdd
                    style={{ width: "21px", height: "26px", marginRight: 5 }}
                  />
                  <span>Yeni Üyelik</span>
                </div>
              </div>
              <div className="mbl-banner-content-user-2">
                <AiFillFacebook
                  style={{ width: "21px", height: "26px", marginRight: 5 }}
                />
                <span>Facebook ile Giriş Yap</span>
              </div>
            </div>
          </div>
          <div className="mbl-content">
            <div className="mbl-content-city" onClick={() => setIlce("")}>
              <div className="mbl-content-city-l">
                <HiOutlineLocationMarker
                  style={{ width: "21px", height: "26px", marginRight: 15 }}
                />
                <span>Semtinizi Seçin</span>
              </div>
              <BiChevronRight style={{ width: "21px", height: "26px" }} />
            </div>
            <div className="mbl-content-restaurant-1">
              <p>Zincir Restoranlar</p>

              <Carousel responsive={responsive}>
                {data.zincirrestaurant.map((x, i) => (
                  <div
                    key={x.id}
                    className="multiCarousel-item-1"
                    onClick={() => setIlce("")}
                  >
                    <img src={x.src} />
                    <span>{x.text}</span>
                  </div>
                ))}
              </Carousel>
            </div>
            <div className="mbl-content-restaurant-2">
              <p>Süper Restoranlar</p>
              <div className="mbl-content-restaurant-2-r">
                <span>Tümü</span>
                <BiChevronRight style={{ width: "21px", height: "26px" }} />
              </div>
            </div>

            {data.superres.map((x, i) => (
              <div key={x.id} className="mbl-content-restaurant-2-c">
                <div className="mbl-content-restaurant-2-c-l">
                  <span>{x.rate}</span>
                  <img src="https://www.yemeksepeti.com/assets/images/mobile/superdelivery-icon.png" />
                  <a href="https://www.yemeksepeti.com/aren-kebap-sisli-merkez-mah-istanbul">
                    {x.text}
                  </a>
                </div>

                <BiChevronRight
                  style={{ width: "21px", height: "26px", color: "#767676" }}
                />
              </div>
            ))}
            <div className="mbl-content-restaurant-2">
              <p>Yeni Eklenen Restoranlar</p>
              <div className="mbl-content-restaurant-2-r">
                <span>Tümü</span>
                <BiChevronRight style={{ width: "21px", height: "26px" }} />
              </div>
            </div>
            {data.yeniekl.map((x, i) => (
              <div key={x.id} className="mbl-content-restaurant-2-c">
                <div className="mbl-content-restaurant-2-c-l">
                  <span>{x.rate}</span>
                  <img src="https://www.yemeksepeti.com/assets/images/mobile/superdelivery-icon.png" />
                  <a href="https://www.yemeksepeti.com/aren-kebap-sisli-merkez-mah-istanbul">
                    {x.text}
                  </a>
                </div>

                <BiChevronRight
                  style={{ width: "21px", height: "26px", color: "#767676" }}
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <Ilceler />
      )}
    </div>
  );
}
