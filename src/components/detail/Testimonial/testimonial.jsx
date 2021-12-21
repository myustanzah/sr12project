import Image1 from "../../../assets/testimoni1.jpeg";
import Image2 from "../../../assets/testimoni2.jpg";
import Image3 from "../../../assets/testi3.jpeg";
import Image4 from "../../../assets/testi4.jpg";
import Image5 from "../../../assets/testi5.jpg";
import "./index.css";

export default function Testimonial() {
  return (
    <>
      <div class="productList">
        <div className="col">
          <img src={Image1} alt="" width="auto" height="auto" />
        </div>
        <div className="col">
          <img src={Image2} alt="" width="auto" height="auto" />
        </div>
        <div className="col">
          <img src={Image3} alt="" width="auto" height="auto" />
        </div>
        <div className="col">
          <img src={Image4} alt="" width="auto" height="auto" />
        </div>
        <div className="col">
          <img src={Image5} alt="" width="auto" height="auto" />
        </div>
      </div>
    </>
  );
}
