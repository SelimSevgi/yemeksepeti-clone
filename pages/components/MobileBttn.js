import React, { useState } from "react";
import {
  AiOutlineClose,
  AiOutlineSearch,
  AiOutlineRight,
  AiOutlineLock,
  AiOutlineUserAdd,
  AiOutlineInfoCircle,
} from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaYandexInternational } from "react-icons/fa";
import { MdSchool } from "react-icons/md";
import { IoMdMegaphone } from "react-icons/io";
import { BsCircle } from "react-icons/bs";
import { HiOutlineMenu } from "react-icons/hi";
export default function MobileBttn() {
  const [showMenu, setShowMenu] = useState(false);
  console.log(showMenu);
  const data = [
    {
      id: 1,
      icon: <HiOutlineLocationMarker />,
      name: " Restoranları Listeleyin",
    },
    {
      id: 2,
      icon: <FaYandexInternational />,
      name: "  Ana Sayfa ",
    },
    {
      id: 3,
      icon: <AiOutlineLock />,
      name: "  Üye Girişi",
    },
    {
      id: 4,
      icon: <AiOutlineUserAdd />,
      name: "  Yeni Üyelik",
    },

    {
      id: 55,
      icon: <MdSchool />,
      name: "  Kampüs",
    },
    {
      id: 5,
      icon: <IoMdMegaphone />,
      name: "  Fırsatlar",
    },
    {
      id: 6,
      icon: <AiOutlineInfoCircle />,
      name: "  Hakkında",
    },
    {
      id: 7,
      icon: <BsCircle />,
      name: "  Şehir Değiştir",
    },
  ];
  return (
    <>
      <HiOutlineMenu
        className="mobil-header-1-1"
        onClick={() => setShowMenu(!showMenu)}
      />
      {showMenu ? (
        <div className="mobilebttn">
          <div className="mb-dizayn">
            {showMenu ? (
              <AiOutlineClose
                className="mb-close"
                onClick={() => setShowMenu(!showMenu)}
              />
            ) : (
              <HiOutlineMenu
                className="mobil-header-1-1"
                onClick={() => setShowMenu(!showMenu)}
              />
            )}
            <div className="mb-search">
              <div className="mb-src-in">
                <input
                  className="mb-src-in-i"
                  type="text"
                  placeholder="Yemek, mutfak veya restoran arayın"
                ></input>
              </div>{" "}
              <p className="mb-src-btn">
                {" "}
                <AiOutlineSearch className="mb-src-btn-i" />{" "}
              </p>
            </div>
          </div>

          {data.map((x, i) => (
            <div key={x.id} className="zzz">
              <div className="zzza">
                {x.icon}
                <p>{x.name}</p>
              </div>
              <AiOutlineRight className="zzzc" />
            </div>
          ))}

          <div className="zzz">
            <div className="zzza">
              <HiOutlineLocationMarker className="zzzb" />
              <p>Restorant</p>
            </div>
            <AiOutlineRight className="zzzc" />
          </div>
          <button className="sssa">Yardım Merkezi</button>
          <div className="isa">
            <div className="is">
              <div className="iss">
                <img src="https://i.hizliresim.com/tundm5f.PNG" />
                <span>
                  Yemeksepeti mobil uygulamasını ücretsiz olarak telefonunuza
                  indirin!
                </span>
              </div>
              <button>Hemen indir</button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
