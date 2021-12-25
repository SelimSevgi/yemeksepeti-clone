import React from "react";
import { AiFillFacebook, AiOutlineSearch } from "react-icons/ai";
import {
  RiShoppingBasket2Fill,
  RiNumber1,
  RiNumber2,
  RiNumber3,
} from "react-icons/ri";
import PageEnd from "./PageEnd";

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
              <AiOutlineSearch />
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
      <PageEnd />
    </div>
  );
}
