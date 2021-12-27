import React from "react";
import {
  AiFillFacebook,
  AiOutlineSearch,
  AiFillCaretRight,
} from "react-icons/ai";
import {
  RiShoppingBasket2Fill,
  RiNumber1,
  RiNumber2,
  RiNumber3,
} from "react-icons/ri";
import CityHomeSlider from "./CityHomeSlider";

export default function CityHome() {
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
            />
            <button>
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
                  <AiFillFacebook />
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
                <RiShoppingBasket2Fill className="city-down-left-h" /> Sepetiniz
                henüz boş.
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
                      Sadece Yemeksepeti'nde, 'Müthiş Fırsat Kovası' 70,57 TL
                      yerine 39,99 TL!
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
                      Sadece Yemeksepeti'nde, 'Seçilmiş Menü (3'lü Whopper
                      Fırsatı®)' 101,97 TL yerine 59,97 TL!
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
                    <span className="city-down-left-r-e">
                      Popeyes, Yeşilyurt (İnönü Mah. - Malatya Park Avm)
                    </span>
                  </div>
                  <div>
                    <span className="city-down-left-r-f">
                      Sadece Yemeksepeti'nde, 'Müthiş Fırsat Kovası' 70,57 TL
                      yerine 39,99 TL!
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
                      Sadece Yemeksepeti'nde, 'Seçilmiş Menü (3'lü Whopper
                      Fırsatı®)' 101,97 TL yerine 59,97 TL!
                    </span>
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
      </div>
    </div>
  );
}
