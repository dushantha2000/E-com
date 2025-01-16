import React from 'react'
import ProductImg  from "../../assets/images/Mens/eleven.jpg";

function FeaturedProduct() {
  return (
    <section className="section-2 py-5">
    <div className="container">
      <h2>Featured Products</h2>
      <div className="row mt-3">
        <div className="col-3 md-3">
          <div className="product card border-0">
            <div className="card-img">
              <img src={ProductImg} alt="ProductImg" className="w-100" />
            </div>
            <div className="card-body pt-3">
              <a href="">Red check shirt for Men</a>
              <div className="price">
                $60 <span className="text-decoration-line-through">$80</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-3 md-3">
          <div className="product card border-0">
            <div className="card-img">
              <img src={ProductImg} alt="ProductImg" className="w-100" />
            </div>
            <div className="card-body pt-3">
              <a href="">Red check shirt for Men</a>
              <div className="price">
                $60 <span className="text-decoration-line-through">$80</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-3 md-3">
          <div className="product card border-0">
            <div className="card-img">
              <img src={ProductImg} alt="ProductImg" className="w-100" />
            </div>
            <div className="card-body pt-3">
              <a href="">Red check shirt for Men</a>
              <div className="price">
                $60 <span className="text-decoration-line-through">$80</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-3 md-3">
          <div className="product card border-0">
            <div className="card-img">
              <img src={ProductImg} alt="ProductImg" className="w-100" />
            </div>
            <div className="card-body pt-3">
              <a href="">Red check shirt for Men</a>
              <div className="price">
                $60 <span className="text-decoration-line-through">$80</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default FeaturedProduct
