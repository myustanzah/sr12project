import Image1 from "../../../assets/product1.jpeg";
import Image2 from "../../../assets/2.jpeg";
import Image3 from "../../../assets/3.jpg";
import Image4 from "../../../assets/4.jpg";
import "./product.css";

export default function Product() {
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
      </div>
    </>
  );
}
