import React from "react";

export default function Footer() {
  const data = [
    {
      id: "1",
      name: "https://cdn.yemeksepeti.com/App_Themes/Default_tr-TR/images/sehirsecimMarkalar/dominos.png"
    },
    {
      id: "2",
      name: "https://cdn.yemeksepeti.com/App_Themes/Default_tr-TR/images/sehirsecimMarkalar/cigkoftem.png"
    },
    {
      id: "3",
      name: "https://cdn.yemeksepeti.com/App_Themes/Default_tr-TR/images/sehirsecimMarkalar/papa_johns.png"
    },
    {
      id: "4",
      name: "https://cdn.yemeksepeti.com/App_Themes/Default_tr-TR/images/sehirsecimMarkalar/subway.png"
    },
    {
      id: "5",
      name: "https://cdn.yemeksepeti.com/App_Themes/Default_tr-TR/images/sehirsecimMarkalar/burgerking.png"
    },
    {
      id: "6",
      name: "https://cdn.yemeksepeti.com/App_Themes/Default_tr-TR/images/sehirsecimMarkalar/boluluhasan.png"
    },
    {
      id: "7",
      name: "https://cdn.yemeksepeti.com/App_Themes/Default_tr-TR/images/sehirsecimMarkalar/komagene.png"
    },
    {
      id: "8",
      name: "https://cdn.yemeksepeti.com/App_Themes/Default_tr-TR/images/sehirsecimMarkalar/terrapizza.png"
    },
    {
      id: "9",
      name: "https://cdn.yemeksepeti.com/App_Themes/Default_tr-TR/images/sehirsecimMarkalar/pizzahut.png"
    },
    {
      id: "10",
      name: "https://cdn.yemeksepeti.com/App_Themes/Default_tr-TR/images/sehirsecimMarkalar/popeyes.gif"
    },
    {
      id: "11",
      name: "",
    },
 
  ];
  return (
    <div className="footer">
      <div className="footer-comp">
        {data.map((x, i) => (
          <div className="footer-comp-img" href="/">
            <div className="footer-comp-imgg">
              <img src={x.name} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
