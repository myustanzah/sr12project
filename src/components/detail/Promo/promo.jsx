import Image1 from "../../../assets/promo1.jpg";
import Image2 from "../../../assets/promo2.jpg";
import Image3 from "../../../assets/promo3.jpg";
import Image4 from "../../../assets/promo4.png";
import "./promo.css";

export default function Promo() {
  return (
    <>
      <div class="productList">
        <div className="col">
          <img src={Image1} alt="" width="auto" height="auto" />
          <button className="btn btn-primary">Beli paket Gomil</button>
        </div>
        <div className="col">
          <img src={Image2} alt="" width="auto" height="auto" />
          <button className="btn btn-primary">Beli paket Hematku</button>
        </div>
        <div className="col">
          <img src={Image3} alt="" width="auto" height="auto" />
          <button className="btn btn-primary">Beli paket Komplit</button>
        </div>
        <div className="col">
          <img src={Image4} alt="" width="500" height="500" />
        </div>
      </div>
    </>
  );
}
