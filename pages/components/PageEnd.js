import React from "react";
import { FaTwitterSquare } from "react-icons/fa";
import { AiFillFacebook } from "react-icons/ai";
import { GiFeather } from "react-icons/gi";

export default function PageEnd() {
  return (
    <div className="page-end">
      <div className="bbb">
        <div className="aaa">
          <div className="page-end-yemeksepeti">
            <a href="#">S.S.S ve İşlem Rehberi</a>
            <a href="#">İletişim</a>
            <a href="#">Mobil</a>
            <a href="#">Kullanıcı Sözleşmesi</a>
            <a href="https://portakalauth.yemeksepeti.com/Account/Login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3Dportakal.web.portal.core%26redirect_uri%3Dhttps%253A%252F%252Fportakal.yemeksepeti.com%252Fsignin-oidc%26response_type%3Did_token%2520token%26scope%3Dopenid%2520profile%2520email%2520accountinfo%2520webapi%2520roles%26response_mode%3Dform_post%26nonce%3D637754848135116847.Zjc3MjMxMTYtNjI0ZC00NWJlLWExZTktMmUwZTBkZGFiZTI1NzZmZmU2NGItZjA0Mi00NTc3LTgwNjUtNTcxY2MxZmJhZWI3%26state%3DCfDJ8HPj5nKZ5N5GlTWD0TMSrnllH8kqoirv-tBGsrRJbfeeD2GQlbtt7qoIPTlxj10nwHJObzHV6mt0fX88w7GPT7ymQ6v5_ItnFJ3eGiLZ5-0mXDflXDa3cMyasP8fSE2Y7FhfMGu1-YWYeDdD-nKGEOnz6_dK-GNsIYJWQRkP9C3Pfk3VJSC-rg-3dOL3VTygD5WsZJs_laVvteTE87d77z80MLOI-K29rD8jILL6vWhV39WhmmCc6BUhIkrQDgNZfJCgQdrXQX0AyES5QHchTCTB5UANKs3VS6wiEfnPqImGFbjS41hE5x8zLvsn2KMvnQ%26x-client-SKU%3DID_NETSTANDARD2_0%26x-client-ver%3D5.6.0.0">
              Restoran Portal
            </a>
            <a href="#">Restoran Öner</a>
          </div>
        </div>
      </div>
      <div className="page-end-contact">
        <div className="ccc">
          <div className="page-end-contact-follow">
            <p>
              {" "}
              Görüş ve sorularınız için{" "}
              <a href="mailto:info@yemeksepeti.com">
                info@yemeksepeti.com
              </a>{" "}
              adresine email gönderebilirsiniz.{" "}
            </p>
            <div className="page-end-contact-follow-bold">
              Bizi Takip Edin:{" "}
              <a href="https://www.facebook.com/Yemeksepeti">
                <AiFillFacebook
                  className="page-end-contact-follow-bold-icon"
                  style={{ color: "#3a72a0" }}
                />
              </a>{" "}
              <a href="https://www.twitter.com/yemeksepeti">
                {" "}
                <FaTwitterSquare
                  style={{ color: "#05a5ee" }}
                  className="page-end-contact-follow-bold-icon"
                />{" "}
              </a>
              <a href="http://blog.yemeksepeti.com/">
                {" "}
                <GiFeather
                  className="page-end-contact-follow-bold-icon"
                  style={{ background: "#ff6100", color: "white" }}
                />{" "}
              </a>
            </div>
          </div>

          <div className="page-end-contact-app">
            <div className="page-end-contact-app-1">
              <img src="https://www.teknotalk.com/wp-content/uploads/2021/10/1633010281_ys_logo_narcicegi-620x372.jpg" />{" "}
              <a href="https://yemek.com/">
                {" "}
                <img src="https://cdn.yemek.com/assets/images/svg/logo.svg" />
              </a>
            </div>

            <div className="page-end-contact-app-2">
              <a href="https://apps.apple.com/tr/app/yemeksepeti/id373034841">
                <img src="https://i.hizliresim.com/czhxokd.PNG" />
              </a>

              <a href="https://play.google.com/store/apps/details?id=com.yemeksepeti.yemekcom">
                <img src="https://i.hizliresim.com/6gyej32.PNG" />
              </a>
            </div>

            <div className="page-end-contact-app-2">
              {" "}
              <a href="https://play.google.com/store/apps/details?id=com.inovel.app.yemeksepeti&feature=banner">
                {" "}
                <img src="https://i.hizliresim.com/1nfyhsy.PNG" />{" "}
              </a>{" "}
              <a href="https://play.google.com/store/apps/details?id=com.yemeksepeti.yemekcom">
                {" "}
                <img src="https://i.hizliresim.com/4n7wpr9.PNG" />
              </a>
            </div>
            <div className="page-end-contact-app-3">
              <a href="https://www.eticaret.gov.tr/siteprofil/202107B0B29742B69ADFFD4F2293FE5B/wwwyemeksepeticom">
                {" "}
                <img src="https://i.hizliresim.com/tjj9oed.PNG" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="page-end-support">
        <p>
          {" "}
          Çağrı merkezi bekleme müzikleri için{" "}
          <a href="https://radioeksen.com/">
            <img src="https://upload.wikimedia.org/wikipedia/tr/b/b3/Radyo_Eksen_logosu.png" />
          </a>{" "}
          &apos;e teşekkür ederiz.
        </p>
      </div>
    </div>
  );
}
