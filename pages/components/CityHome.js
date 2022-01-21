import React, { useState, useEffect } from "react";
import {
  AiFillFacebook,
  AiOutlineSearch,
  AiFillCaretRight,
  AiOutlineCloseCircle,
} from "react-icons/ai";
import {
  RiShoppingBasket2Fill,
  RiNumber1,
  RiNumber2,
  RiNumber3,
} from "react-icons/ri";
import CityHomeSlider from "./CityHomeSlider";

import { MdArrowDropUp } from "react-icons/md";
import dataSearch from "./data.json";
const data = [
  {
    id: 1,
    title: "Döner",
  },
  {
    id: 2,
    title: "Tatlı",
  },
  {
    id: 3,
    title: "Pizza",
  },
  {
    id: 4,
    title: "Lahmacun",
  },
  {
    id: 5,
    title: "Burger",
  },
  {
    id: 6,
    title: "Pide",
  },
  {
    id: 7,
    title: "Tavuk",
  },
  {
    id: 8,
    title: "Çiğ Köfte",
  },
  {
    id: 9,
    title: "Kebap",
  },
  {
    id: 10,
    title: "Dürüm",
  },
  {
    id: 11,
    title: "Tantuni",
  },
];

export default function CityHome() {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);
  const [result, setResult] = useState([]);
  const [openSearch, setOpenSearch] = useState(false);
  const [openFood, setOpenFood] = useState([
    false,
    false,
    false,
    false,
    false,
    false,

    false,
    false,

    false,
    false,

    false,
  ]);
  useEffect(() => {
    if (text) {
      setResult(
        data.filter((item) =>
          item.title.toLowerCase().includes(text.toLowerCase())
        )
      );
    } else {
      setResult([]);
    }
  }, [text]);
  console.log("asda", open);
  return (
    <div className="cityhome">
      <div className="cityhome-color">
        <div className="city-up">
          <img src="https://assets.yemeksepeti.com/images/ys-new-logo.svg" />
          <select className="city-up-a" placeholder="Semtinizi Seçiniz">
            <option> </option>
            <option>yeşilyurt</option>
            <option>battalgazi</option>
          </select>
          <div className="city-up-b">
            <input
              type="text"
              placeholder="Yemek, mutfak veya restoran arayın."
              onChange={(e) => setText(e.target.value)}
              value={text}
              onClick={() => setOpen(!open)}
            />

            {text === "pizza" ||
            text === "pide" ||
            text === "lahmacun" ||
            text === "tatlı" ||
            text === "döner" ||
            text === "tantuni" ||
            text === "dürüm" ||
            text === "çiğköfte" ||
            text === "kebap" ||
            text === "tavuk" ||
            text === "burger" ? null : (
              <>
                {" "}
                {text.length <= 0 ? null : (
                  <>
                    {open ? null : (
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
                          <div className="food-close">
                            <AiOutlineCloseCircle
                              size={20}
                              onClick={(e) => setOpen(!open)}
                            />
                          </div>
                          {openFood[0] && (
                            <div className="city-up-b-openFood">
                              {dataSearch.döner.map((item, index) => (
                                <div key={index} className="search-result">
                                  <img src={item.imgUrl} />
                                  <span>{item.rate}</span>
                                  <span>{item.text}</span>
                                </div>
                              ))}
                            </div>
                          )}
                          {openFood[1] && (
                            <div className="city-up-b-openFood">
                              {dataSearch.tatlı.map((item, index) => (
                                <div key={index} className="search-result">
                                  <img src={item.imgUrl} />
                                  <span>{item.rate}</span>
                                  <span>{item.text}</span>
                                </div>
                              ))}
                            </div>
                          )}
                          {openFood[2] && (
                            <div className="city-up-b-openFood">
                              {dataSearch.pizza.map((item, index) => (
                                <div key={index} className="search-result">
                                  <img src={item.imgUrl} />
                                  <span>{item.rate}</span>
                                  <span>{item.text}</span>
                                </div>
                              ))}
                            </div>
                          )}
                          {openFood[3] && (
                            <div className="city-up-b-openFood">
                              {dataSearch.lahmacun.map((item, index) => (
                                <div key={index} className="search-result">
                                  <img src={item.imgUrl} />
                                  <span>{item.rate}</span>
                                  <span>{item.text}</span>
                                </div>
                              ))}
                            </div>
                          )}
                          {openFood[4] && (
                            <div className="city-up-b-openFood">
                              {dataSearch.burger.map((item, index) => (
                                <div key={index} className="search-result">
                                  <img src={item.imgUrl} />
                                  <span>{item.rate}</span>
                                  <span>{item.text}</span>
                                </div>
                              ))}
                            </div>
                          )}
                          {openFood[5] && (
                            <div className="city-up-b-openFood">
                              {dataSearch.pide.map((item, index) => (
                                <div key={index} className="search-result">
                                  <img src={item.imgUrl} />
                                  <span>{item.rate}</span>
                                  <span>{item.text}</span>
                                </div>
                              ))}
                            </div>
                          )}
                          {openFood[6] && (
                            <div className="city-up-b-openFood">
                              {dataSearch.tavuk.map((item, index) => (
                                <div key={index} className="search-result">
                                  <img src={item.imgUrl} />
                                  <span>{item.rate}</span>
                                  <span>{item.text}</span>
                                </div>
                              ))}
                            </div>
                          )}
                          {openFood[7] && (
                            <div className="city-up-b-openFood">
                              {dataSearch.çiğköfte.map((item, index) => (
                                <div key={index} className="search-result">
                                  <img src={item.imgUrl} />
                                  <span>{item.rate}</span>
                                  <span>{item.text}</span>
                                </div>
                              ))}
                            </div>
                          )}
                          {openFood[8] && (
                            <div className="city-up-b-openFood">
                              {dataSearch.kebap.map((item, index) => (
                                <div key={index} className="search-result">
                                  <img src={item.imgUrl} />
                                  <span>{item.rate}</span>
                                  <span>{item.text}</span>
                                </div>
                              ))}
                            </div>
                          )}
                          {openFood[9] && (
                            <div className="city-up-b-openFood">
                              {dataSearch.dürüm.map((item, index) => (
                                <div key={index} className="search-result">
                                  <img src={item.imgUrl} />
                                  <span>{item.rate}</span>
                                  <span>{item.text}</span>
                                </div>
                              ))}
                            </div>
                          )}
                          {openFood[10] && (
                            <div className="city-up-b-openFood">
                              {dataSearch.tantuni.map((item, index) => (
                                <div key={index} className="search-result">
                                  <img src={item.imgUrl} />
                                  <span>{item.rate}</span>
                                  <span>{item.text}</span>
                                </div>
                              ))}
                            </div>
                          )}

                          {!openFood[0] &&
                            !openFood[1] &&
                            !openFood[2] &&
                            !openFood[3] &&
                            !openFood[4] &&
                            !openFood[5] &&
                            !openFood[6] &&
                            !openFood[7] &&
                            !openFood[8] &&
                            !openFood[9] &&
                            !openFood[10] && (
                              <>
                                <div className="food-1">
                                  <p>Bunu mu demek istediniz?</p>{" "}
                                </div>{" "}
                                {result && (
                                  <div className="food-title-result">
                                    {result.map((item) => (
                                      <div
                                        key={item.id}
                                        className="food-title-result-item"
                                      >
                                        {item.title}
                                      </div>
                                    ))}
                                  </div>
                                )}
                                <div className="food-2">
                                  <p>Popüler Aramalar</p>
                                  <div className="food-grid">
                                    <span
                                      onClick={(e) => {
                                        setText("döner");
                                        setOpenFood([
                                          !openFood[0],
                                          false,
                                          false,
                                          false,
                                          false,
                                          false,
                                          false,
                                          false,
                                          false,
                                          false,
                                          false,
                                        ]);
                                      }}
                                    >
                                      {" "}
                                      Döner
                                    </span>

                                    <span
                                      onClick={(e) =>
                                        setOpenFood([
                                          false,
                                          !openFood[1],
                                          false,
                                          false,
                                          false,
                                          false,
                                          false,
                                          false,
                                          false,
                                          false,
                                          false,
                                        ])
                                      }
                                    >
                                      {" "}
                                      Tatlı
                                    </span>
                                    <span
                                      onClick={(e) =>
                                        setOpenFood([
                                          false,
                                          false,
                                          !openFood[2],
                                          false,
                                          false,
                                          false,
                                          false,
                                          false,
                                          false,
                                          false,
                                          false,
                                        ])
                                      }
                                    >
                                      {" "}
                                      Pizza
                                    </span>
                                    <span
                                      onClick={(e) =>
                                        setOpenFood([
                                          false,
                                          false,
                                          false,
                                          !openFood[3],
                                          false,
                                          false,
                                          false,
                                          false,
                                          false,
                                          false,
                                          false,
                                        ])
                                      }
                                    >
                                      {" "}
                                      Lahmacun
                                    </span>
                                    <span
                                      onClick={(e) =>
                                        setOpenFood([
                                          false,
                                          false,
                                          false,
                                          false,
                                          !openFood[4],
                                          false,
                                          false,
                                          false,
                                          false,
                                          false,
                                          false,
                                        ])
                                      }
                                    >
                                      {" "}
                                      Burger
                                    </span>
                                    <span
                                      onClick={(e) =>
                                        setOpenFood([
                                          false,
                                          false,
                                          false,
                                          false,

                                          false,
                                          !openFood[5],
                                          false,
                                          false,
                                          false,
                                          false,
                                          false,
                                        ])
                                      }
                                    >
                                      {" "}
                                      Pide
                                    </span>
                                    <span
                                      onClick={(e) =>
                                        setOpenFood([
                                          false,
                                          false,
                                          false,
                                          false,

                                          false,

                                          false,
                                          !openFood[6],
                                          false,
                                          false,
                                          false,
                                          false,
                                        ])
                                      }
                                    >
                                      {" "}
                                      Tavuk
                                    </span>
                                    <span
                                      onClick={(e) =>
                                        setOpenFood([
                                          false,
                                          false,
                                          false,
                                          false,

                                          false,
                                          false,

                                          false,
                                          !openFood[7],
                                          false,
                                          false,
                                          false,
                                        ])
                                      }
                                    >
                                      {" "}
                                      Çiğ Köfte
                                    </span>
                                    <span
                                      onClick={(e) =>
                                        setOpenFood([
                                          false,
                                          false,
                                          false,
                                          false,

                                          false,
                                          false,
                                          false,

                                          false,
                                          !openFood[8],
                                          false,
                                          false,
                                        ])
                                      }
                                    >
                                      {" "}
                                      Kebap
                                    </span>
                                    <span
                                      onClick={(e) =>
                                        setOpenFood([
                                          false,
                                          false,
                                          false,
                                          false,

                                          false,
                                          false,
                                          false,
                                          false,
                                          false,
                                          !openFood[9],
                                          false,
                                        ])
                                      }
                                    >
                                      {" "}
                                      Dürüm
                                    </span>
                                    <span
                                      onClick={(e) =>
                                        setOpenFood([
                                          false,
                                          false,
                                          false,
                                          false,

                                          false,
                                          false,
                                          false,
                                          false,
                                          false,
                                          false,
                                          !openFood[10],
                                        ])
                                      }
                                    >
                                      {" "}
                                      Tantuni
                                    </span>
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
                              </>
                            )}
                        </div>
                      </div>
                    )}
                  </>
                )}
              </>
            )}
            {text === "pizza" ||
            text === "pide" ||
            text === "lahmacun" ||
            text === "tatlı" ||
            text === "döner" ||
            text === "tantuni" ||
            text === "dürüm" ||
            text === "çiğköfte" ||
            text === "kebap" ||
            text === "tavuk" ||
            text === "burger" ? (
              <div className="search-result-main">
                <div style={{ marginTop: "15px", padding: 0 }}>
                  <MdArrowDropUp
                    style={{
                      color: "white",

                      width: "55px",
                      height: "55px",
                      objectFit: "cover",

                      position: "absolute",
                      top: "-32px",
                      right: "70%",
                    }}
                  />
                </div>
                <span> Restoranlar</span>
                <div className="search-result-map">
                  {text === "pizza" ? (
                    dataSearch.pizza.map((item, index) => (
                      <div key={index} className="search-result">
                        <img src={item.imgUrl} />
                        <span>{item.rate}</span>
                        <span>{item.text}</span>
                      </div>
                    ))
                  ) : text === "pide" ? (
                    dataSearch.pide.map((item, index) => (
                      <div key={index} className="search-result">
                        <img src={item.imgUrl} />
                        <span>{item.rate}</span>
                        <span>{item.text}</span>
                      </div>
                    ))
                  ) : text === "lahmacun" ? (
                    dataSearch.lahmacun.map((item, index) => (
                      <div key={index} className="search-result">
                        <img src={item.imgUrl} />
                        <span>{item.rate}</span>
                        <span>{item.text}</span>
                      </div>
                    ))
                  ) : text === "tatlı" ? (
                    dataSearch.tatlı.map((item, index) => (
                      <div key={index} className="search-result">
                        <img src={item.imgUrl} />
                        <span>{item.rate}</span>
                        <span>{item.text}</span>
                      </div>
                    ))
                  ) : text === "döner" ? (
                    dataSearch.döner.map((item, index) => (
                      <div key={index} className="search-result">
                        <img src={item.imgUrl} />
                        <span>{item.rate}</span>
                        <span>{item.text}</span>
                      </div>
                    ))
                  ) : text === "tantuni" ? (
                    dataSearch.tantuni.map((item, index) => (
                      <div key={index} className="search-result">
                        <img src={item.imgUrl} />
                        <span>{item.rate}</span>
                        <span>{item.text}</span>
                      </div>
                    ))
                  ) : text === "dürüm" ? (
                    dataSearch.dürüm.map((item, index) => (
                      <div key={index} className="search-result">
                        <img src={item.imgUrl} />
                        <span>{item.rate}</span>
                        <span>{item.text}</span>
                      </div>
                    ))
                  ) : text === "çiğköfte" ? (
                    dataSearch.çiğköfte.map((item, index) => (
                      <div key={index} className="search-result">
                        <img src={item.imgUrl} />
                        <span>{item.rate}</span>
                        <span>{item.text}</span>
                      </div>
                    ))
                  ) : text === "kebap" ? (
                    dataSearch.kebap.map((item, index) => (
                      <div key={index} className="search-result">
                        <img src={item.imgUrl} />
                        <span>{item.rate}</span>
                        <span>{item.text}</span>
                      </div>
                    ))
                  ) : text === "tavuk" ? (
                    dataSearch.tavuk.map((item, index) => (
                      <div key={index} className="search-result">
                        <img src={item.imgUrl} />
                        <span>{item.rate}</span>
                        <span>{item.text}</span>
                      </div>
                    ))
                  ) : text === "burger" ? (
                    dataSearch.burger.map((item, index) => (
                      <div key={index} className="search-result">
                        <img src={item.imgUrl} />
                        <span>{item.rate}</span>
                        <span>{item.text}</span>
                      </div>
                    ))
                  ) : (
                    <p
                      style={{
                        color: "red",
                        fontSize: "13px",
                        fontWeight: "700",
                      }}
                    >
                      Aradığınız üründe restorant bulunamamaktadır!
                    </p>
                  )}
                </div>
              </div>
            ) : null}
            <button onClick={() => setOpenSearch(!openSearch)}>
              {" "}
              <AiOutlineSearch className="city-up-b-icon" />
            </button>
          </div>
        </div>
      </div>
      <div className="city-down">
        <div className="city-down-left">
          <div className="city-down-left-1">
            <form className="city-down-left-a">
              <label type="text">Kullanıcı Adı / E-Posta</label>
              <input type="text" />
              <label type="text">Şifre</label>
              <input type="text" />

              <div className="city-down-left-b">
                <a href="#">Şifremi unuttum</a>
                <div className="city-down-left-b-1">
                  <input type="checkbox" />
                  <span>Beni hatırla</span>
                </div>
              </div>
              <div className="city-down-left-c">
                <button>ÜYE GİRİŞİ</button>
                <p>veya</p>
                <button>
                  {" "}
                  <AiFillFacebook className="city-down-left-c-icon" />
                  Facebook ile Giriş Yap
                </button>
              </div>
              <div className="city-down-left-d">
                <span>Üyeliğiniz yok mu?</span>
                <a href="#">Yeni Üyelik!</a>
              </div>
            </form>
            <div className="city-down-left-e">
              <div className="city-down-left-f">YEMEK SEPETİM</div>
              <div className="city-down-left-g">
                {" "}
                <RiShoppingBasket2Fill
                  style={{ width: "60%", height: "40px", display: "grid" }}
                />
                <span>Sepetiniz henüz boş.</span>
              </div>
            </div>
          </div>
          <div className="city-down-left-2">
            <h2>Kredi kartınız bizi hiç ilgilendirmiyor!</h2>
            <p>
              {" "}
              Siparişlerinizi en doğru, en hızlı ve en kolay şekilde alıyor,
              ilgili restorana eksiksiz ve anında iletiyoruz. Kredi kartı,
              güvenlik sorunu yok. Siparişinizi{" "}
              <b>hiçbir ekstra ücret ödemeden</b> verin,<b>10-45 dakika</b>{" "}
              (restoranın ortalama gönderim süresi) içerisinde yemeğiniz
              elinizde olsun.
            </p>
            <div className="city-down-left-2a">
              <div className="city-down-left-2b">
                <img src="https://assets.yemeksepeti.com/images/frontpage/yemekara.png?v=d3a34e41ad48d4263fa280c994b9816156c65ab1" />
                <span>
                  {" "}
                  <RiNumber1 className="city-down-left-2c" /> RESTORAN VEYA{" "}
                  <br /> YEMEK ARA
                </span>
              </div>
              <div className="city-down-left-2b">
                <img src="https://assets.yemeksepeti.com/images/frontpage/siparisver.png?v=d3a34e41ad48d4263fa280c994b9816156c65ab1" />
                <span>
                  {" "}
                  <RiNumber2 className="city-down-left-2c" /> SİPARİŞİNİ VER
                </span>
              </div>
              <div className="city-down-left-2b">
                <img src="https://assets.yemeksepeti.com/images/frontpage/ode.png?v=d3a34e41ad48d4263fa280c994b9816156c65ab1" />
                <span>
                  {" "}
                  <RiNumber3 className="city-down-left-2c" /> KAPINDA VEYA{" "}
                  <br />
                  ONLINE ÖDE
                </span>
              </div>
            </div>
            <div className="city-down-left-h">
              <div className="city-down-left-l">
                <img src="https://cdn.yemeksepeti.com/adm/Web-2yrz0a.jpg" />
                <CityHomeSlider />
                <img src="https://cdn.yemeksepeti.com/adm/Web-oa8xxb.jpg" />
                <img src="https://cdn.yemeksepeti.com/adm/Web-xvlsnx.jpg" />
              </div>
              <div className="city-down-left-r">
                <div className="city-down-left-r-a">
                  <p>Süper Restoranlar</p>
                  <div className="city-down-left-r-b">
                    <span className="city-down-left-r-c">8.9</span>
                    <img
                      className="city-down-left-r-d"
                      src="https://www.yemeksepeti.com/assets/images/mobile/superdelivery-icon.png"
                    />
                    <span>Cadde Kebap, Yeşilyurt (Ö...</span>
                  </div>
                  <div className="city-down-left-r-b">
                    <span className="city-down-left-r-c">9.1</span>
                    <img
                      className="city-down-left-r-d"
                      src="https://www.yemeksepeti.com/assets/images/mobile/superdelivery-icon.png"
                    />

                    <span>Adana Ciğer 01, Yeşilyurt...</span>
                  </div>
                  <div>
                    <a href="https://www.yemeksepeti.com/malatya-yemek-firsatlari">
                      Tüm fırsatlar
                    </a>
                  </div>
                </div>

                <div className="city-down-left-r-a">
                  <p>Fırsatlar</p>
                  <div className="city-down-left-r-b">
                    <AiFillCaretRight />
                    <span className="city-down-left-r-e">
                      Popeyes, Yeşilyurt (İnönü Mah. - Malatya Park Avm)
                    </span>
                  </div>
                  <div>
                    <span className="city-down-left-r-f">
                      Sadece Yemeksepeti&apos;nde, &apos;Müthiş Fırsat
                      Kovası&apos; 70,57 TL yerine 39,99 TL!
                    </span>
                  </div>
                  <div className="city-down-left-r-b">
                    <AiFillCaretRight />
                    <span className="city-down-left-r-e">
                      Burger King, Yeşilyurt (Çilesiz Mah. - Fahri Kayahan Blv.)
                    </span>
                  </div>
                  <div>
                    <span className="city-down-left-r-f">
                      Sadece Yemeksepeti&apos;nde, &apos;Seçilmiş Menü
                      (3&apos;lü Whopper Fırsatı®)&apos; 101,97 TL yerine 59,97
                      TL!
                    </span>
                  </div>
                  <div>
                    <a href="https://www.yemeksepeti.com/malatya/restoran-arama#sof:5|sob:true|ors:true|sd:true">
                      Tüm Süper Restoranlar
                    </a>
                  </div>
                </div>

                <div className="city-down-left-r-a">
                  <p>Yeni Eklenen Restoranlar</p>
                  <div className="city-down-left-r-b">
                    <AiFillCaretRight />
                    <a
                      className="city-down-left-r-g"
                      href="https://www.yemeksepeti.com/pacazade-yesilyurt-asagibaglar-mah-kuyuonu-malatya"
                    >
                      Paçazade, Yeşilyurt (Aşağıbağlar Mah. - Kuyuönü)
                    </a>
                  </div>

                  <div className="city-down-left-r-b">
                    <AiFillCaretRight />
                    <a
                      className="city-down-left-r-g"
                      href="https://www.yemeksepeti.com/unlu-cig-kofteci-mehmet-usta-battalgazi-halfettin-mah-malatya"
                    >
                      Ünlü Çiğ Köfteci Mehmet Usta, Battalgazi (Halfettin Mah.)
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="city-down-right">
          <a href="https://www.yemeksepeti.com/yilbasi-menuleri-malatya">
            <img src="https://cdn.yemeksepeti.com/App_Themes/Default_tr-TR/images/specialcategory/yilbasiweb.png?v=v2" />
          </a>
          <a href="https://www.yemeksepeti.com/vodafone-menuleri-malatya">
            <img src="https://cdn.yemeksepeti.com/App_Themes/Default_tr-TR/images/specialcategory/vodafonemenuleri_icon.png?v=v2" />
          </a>
          <a href="https://www.yemeksepeti.com/malatya-secilmis-menuler">
            <img src="https://cdn.yemeksepeti.com/App_Themes/Default_tr-TR/images/specialcategory/secilmis_menuler.png?v=v2" />
          </a>{" "}
          <a href="https://www.yemeksepeti.com/fit-hafif-menuler-malatya">
            <img src="https://cdn.yemeksepeti.com/App_Themes/Default_tr-TR/images/specialcategory/fit_hafif_menuler_icon.png?v=v2" />
          </a>
          <a href="https://www.yemeksepeti.com/malatya-universite-kampusleri">
            <img src="https://cdn.yemeksepeti.com/App_Themes/Default_tr-TR/images/kampusicon.png?v=v2" />
          </a>{" "}
        </div>
      </div>{" "}
    </div>
  );
}


