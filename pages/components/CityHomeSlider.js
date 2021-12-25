import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function CityHomeSlider() {
  return (
    <Carousel>
      <div>
        <img src="https://cdn.yemeksepeti.com/adm/Web-u0wb7y.jpg" />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src="https://cdn.yemeksepeti.com/adm/Web-qgatn3.jpg" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src="https://cdn.yemeksepeti.com/adm/Web-qvlcoa.jpg" />
        <p className="legend">Legend 3</p>
      </div>
      <div>
        <img src="https://cdn.yemeksepeti.com/adm/Web-t7p2m5.jpg" />
        <p className="legend">Legend 4</p>
      </div>
      <div>
        <img src="https://cdn.yemeksepeti.com/adm/Web-9mzrx3.jpg" />
        <p className="legend">Legend 5</p>
      </div>
      <div>
        <img src="https://cdn.yemeksepeti.com/adm/Web-dkcndn.png" />
        <p className="legend">Legend 6</p>
      </div>
      <div>
        <img src="https://cdn.yemeksepeti.com/adm/Web-1i37s9.jpg" />
        <p className="legend">Legend 7</p>
      </div>
      <div>
        <img src="https://cdn.yemeksepeti.com/adm/Web-11h0xp.jpg" />
        <p className="legend">Legend 8</p>
      </div>
      <div>
        <img src="https://cdn.yemeksepeti.com/adm/Web-o0i0qj.png" />
        <p className="legend">Legend 9</p>
      </div>
      <div>
        <img src="https://cdn.yemeksepeti.com/adm/Web-z8f7cw.jpg" />
        <p className="legend">Legend 10</p>
      </div>
      <div>
        <img src="https://cdn.yemeksepeti.com/adm/Web-lyhy9f.jpg" />
        <p className="legend">Legend 11</p>
      </div>
    </Carousel>
  );
}
