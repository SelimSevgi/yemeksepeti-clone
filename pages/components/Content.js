import React from "react";
import { FaBeer, FaGlobeAmericas } from "react-icons/fa";

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
          Yemeksepeti'yle yemeğin sadece birkaç tık uzaklıkta! Şehrinizi seçip
          sipariş verin.
        </p>
      </div>
      <div className="content-cn">
        <div className="content-citynumber">
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
      </div>
    </div>
  );
}
