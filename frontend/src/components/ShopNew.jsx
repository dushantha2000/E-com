import React from "react";
import Layout from "./common/Layout";
import Hero from "./common/Hero";
import ProductImg from "../assets/images/Mens/eleven.jpg";

function ShopNew() {
  return (
    <Layout>
      <div className="container">
        <nav aria-label="breadcrumb" className="py-4">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              shop
            </li>
          </ol>
        </nav>
        <div className="row">
          <div className="col-md-4">
            <div className="card shadow border-0 mb-3">
              <div className="card-body p-4">
                <h3 className="mb-3">Categories</h3>
                <ul>
                  <li className="mb-2">
                    <input type="checkbox" />
                    <label htmlFor="" className="ps-2 py-2">
                      Kids
                    </label>
                  </li>
                  <li>
                    <input type="checkbox" />
                    <label htmlFor="" className="ps-2 py-2">
                      Mens
                    </label>
                  </li>
                  <li>
                    <input type="checkbox" />
                    <label htmlFor="" className="ps-2 py-2">
                      Women
                    </label>
                  </li>
                </ul>
              </div>
            </div>
            <div className="card shadow border-0 mb-3">
              <div className="card-body p-4">
                <h3 className="mb-3">Brands</h3>
                <ul>
                  <li className="mb-2">
                    <input type="checkbox" />
                    <label htmlFor="" className="ps-2 py-2">
                      Puma
                    </label>
                  </li>
                  <li>
                    <input type="checkbox" />
                    <label htmlFor="" className="ps-2 py-2">
                      Killer
                    </label>
                  </li>
                  <li>
                    <input type="checkbox" />
                    <label htmlFor="" className="ps-2 py-2">
                      Levis
                    </label>
                  </li>
                  <li>
                    <input type="checkbox" />
                    <label htmlFor="" className="ps-2 py-2">
                      flying Machine
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="row pb-5">
            <div className="col-md-4 col-6">
                <div className="product card border-0">
                  <div className="card-img">
                    <img src={ProductImg} alt="ProductImg" className="w-100" />
                  </div>
                  <div className="card-body pt-3">
                    <a href="">Red check shirt for Men</a>
                    <div className="price">
                      $60{" "}
                      <span className="text-decoration-line-through">$80</span>
                    </div>
                  </div>
                </div>
                </div>
                <div className="col-md-4 col-6">
                <div className="product card border-0">
                  <div className="card-img">
                    <img src={ProductImg} alt="ProductImg" className="w-100" />
                  </div>
                  <div className="card-body pt-3">
                    <a href="">Red check shirt for Men</a>
                    <div className="price">
                      $60{" "}
                      <span className="text-decoration-line-through">$80</span>
                    </div>
                  </div>
                </div>
                </div>
                <div className="col-md-4 col-6">
                <div className="product card border-0">
                  <div className="card-img">
                    <img src={ProductImg} alt="ProductImg" className="w-100" />
                  </div>
                  <div className="card-body pt-3">
                    <a href="">Red check shirt for Men</a>
                    <div className="price">
                      $60{" "}
                      <span className="text-decoration-line-through">$80</span>
                    </div>
                  </div>
                </div>
                </div>
                <div className="col-md-4 col-6">
                <div className="product card border-0">
                  <div className="card-img">
                    <img src={ProductImg} alt="ProductImg" className="w-100" />
                  </div>
                  <div className="card-body pt-3">
                    <a href="">Red check shirt for Men</a>
                    <div className="price">
                      $60{" "}
                      <span className="text-decoration-line-through">$80</span>
                    </div>
                  </div>
                </div>
                </div>
               

                


              
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ShopNew;
