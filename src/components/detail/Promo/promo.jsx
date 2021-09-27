import Image1 from "../../../assets/promo1.jpg";
import Image2 from "../../../assets/promo2.jpg";

export default function Promo() {
  return (
    <>
      <div class="row row-cols-2 row-cols-md-4 g-6">
        <div class="col d-flex justify-content-center">
          <div class="card" style={{ width: "18rem" }}>
            <img src={Image1} class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div class="col d-flex justify-content-center">
          <div class="card" style={{ width: "18rem" }}>
            <img src={Image2} class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div class="col d-flex justify-content-center">
          <div class="card" style={{ width: "18rem" }}>
            <img src={Image1} class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div class="col d-flex justify-content-center">
          <div class="card" style={{ width: "18rem" }}>
            <img src={Image2} class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
