import React from "react";
import {  FaGlobeAmericas } from "react-icons/fa";

export default function Content() {
  const data = [
    { id: "01", name: "Adana" },
    { id: "02", name: "Adıyaman" },
    {
      id: "03",
      name: (
        <span>
          Afyon <br />
          karahisar
        </span>
      ),
    },
    { id: "04", name: "Ağrı" },
    { id: "05", name: "Amasya" },
    { id: "06", name: "Ankara" },
    { id: "07", name: "Antalya" },
    { id: "08", name: "Artvin" },
    { id: "09", name: "Aydın" },
    { id: "10", name: "Balıkesir" },
    { id: "11", name: "Bilecik" },
    { id: "12", name: "Bingöl" },
    { id: "13", name: "Bitlis" },
    { id: "14", name: "Bolu" },
    { id: "15", name: "Burdur" },
    { id: "16", name: "Bursa" },
    { id: "17", name: "Çanakkale" },
    { id: "18", name: "Çankırı" },
    { id: "19", name: "Çorum" },
    { id: "20", name: "Denizli" },
    { id: "21", name: "Diyarbakır" },
    { id: "22", name: "Edirne" },
    { id: "23", name: "Elâzığ" },
    { id: "24", name: "Erzincan" },
    { id: "25", name: "Erzurum" },
    { id: "26", name: "Eskişehir" },
    { id: "27", name: "Gaziantep" },
    { id: "28", name: "Giresun" },
    { id: "29", name: "Gümüşhane" },
    { id: "30", name: "Hakkâri" },
    { id: "31", name: "Hatay" },
    { id: "32", name: "Isparta" },
    { id: "33", name: "Mersin" },
    { id: "34", name: "İstanbul" },
    { id: "35", name: "İzmir" },
    { id: "36", name: "Kars" },
    { id: "37", name: "Kastamonu" },
    { id: "38", name: "Kayseri" },
    { id: "39", name: "Kırklareli" },
    { id: "40", name: "Kırşehir" },
    { id: "41", name: "Kocaeli" },
    { id: "42", name: "Konya" },
    { id: "43", name: "Kütahya" },
    { id: "44", name: "Malatya" },
    { id: "45", name: "Manisa" },
    {
      id: "46",
      name: (
        <span>
          Kahraman <br />
          maraş{" "}
        </span>
      ),
    },
    { id: "47", name: "Mardin" },
    { id: "48", name: "Muğla" },
    { id: "49", name: "Muş" },
    { id: "50", name: "Nevşehir" },
    { id: "51", name: "Niğde" },
    { id: "52", name: "Ordu" },
    { id: "53", name: "Rize" },
    { id: "54", name: "Sakarya" },
    { id: "55", name: "Samsun" },
    { id: "56", name: "Siirt" },
    { id: "57", name: "Sinop" },
    { id: "58", name: "Sivas" },
    { id: "59", name: "Tekirdağ" },
    { id: "60", name: "Tokat" },
    { id: "61", name: "Trabzon" },
    { id: "62", name: "Tunceli" },
    { id: "63", name: "Şanlıurfa" },
    { id: "64", name: "Uşak" },
    { id: "65", name: "Van" },
    { id: "66", name: "Yozgat" },
    { id: "67", name: "Zonguldak" },
    { id: "68", name: "Aksaray" },
    { id: "69", name: "Bayburt" },
    { id: "70", name: "Karaman" },
    { id: "71", name: "Kırıkkale" },
    { id: "72", name: "Batman" },
    { id: "73", name: "Şırnak" },
    { id: "74", name: "Bartın" },
    { id: "75", name: "Ardahan" },
    { id: "76", name: "Iğdır" },
    { id: "77", name: "Yalova" },
    { id: "78", name: "Karabük" },
    { id: "79", name: "Kilis" },
    { id: "80", name: "Osmaniye" },
    { id: "81", name: "Düzce" },
    {
      id: <FaGlobeAmericas />,
      name: "KKTC",
    },
  ];

  return (
    <div className="content">
      <div className="content-gri">
        <p>
          Yemeksepeti&apos;yle yemeğin sadece birkaç tık uzaklıkta! Şehrinizi
          seçip sipariş verin.
        </p>
      </div>
      <div className="content-cn">
        {data.map((x, i) => (
          <div key={x.id} className="content-block">
            <div className="content-number">
              <div className="content-number-items">
                <div className="content-number-item">{x.id}</div>
              </div>
            </div>
            <div className="content-city">
              <div className="content-city-items">
                <div className="content-city-item">
                  <span>{x.name}</span>
                </div>
              </div>
            </div>{" "}
          </div>
        ))}
      </div>
      <div className="content-bottom">
        <div className="content-bottom-item">
          <div className="content-bottom-tree">
            <div className="content-bottom-tree-img">
              <img
                src="https://assets.yemeksepeti.com/images/frontpage/anonyColumnFirst.png?v=e6af34f6337da489f59fadac9f07c242cae70eea"
                alt="restorani sec"
              />
            </div>
            <span className="content-bottom-tree-art">restoranı seç</span>{" "}
          </div>
          <div className="content-bottom-tree">
            <div className="content-bottom-tree-img">
              <img
                src="https://assets.yemeksepeti.com/images/frontpage/anonyColumnSecond.png?v=e6af34f6337da489f59fadac9f07c242cae70eea"
                alt="siparisini ver"
              />
            </div>
            <span className="content-bottom-tree-art">siparişini ver</span>{" "}
          </div>
          <div className="content-bottom-tree">
            <div className="content-bottom-tree-img">
              <img
                src="https://assets.yemeksepeti.com/images/frontpage/anonyColumnLast.png?v=e6af34f6337da489f59fadac9f07c242cae70eea"
                alt="diledigin gibi ode"
              />
            </div>
            <span className="content-bottom-tree-art">dilediğin gibi öde</span>{" "}
          </div>
        </div>
      </div>
      <div className="content-bottom-article">
        <span>
          Pizza, lahmacun, sandviç, kebap, döner, hamburger ve tüm yemek
          siparişlerinizi en hızlı ve en kolay şekilde alıyor, ilgili restorana
          anında iletiyoruz.
          <b> Kredi kartı, güvenlik sorunu yok.</b> Yemek siparişinizi hiçbir
          ekstra ücret ödemeden verin, <b>10-45 dakika</b> (restoranın ortalama
          gönderim süresi) içerisinde yemeğiniz elinizde olsun.
        </span>{" "}
      </div>{" "}
      <img
        className="content-bottom-bg"
        src="https://cdn.yemeksepeti.com/App_Themes/Default_tr-TR/images/citySelectImg/sehirsecim-gorseller-big03.jpg"
      />
    </div>
  );
}
