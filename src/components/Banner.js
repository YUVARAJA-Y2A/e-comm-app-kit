import React from "react";
import "./styles/banner.css";

function Banner() {
  return (
    <div>
      <div class="banner-background">
        <p class="banner-text">Super Flash Sale 50% Off</p>
      </div>
      <div class="banner-items d-flex flex-row">
        <div class="banner-item1">
          <p class="banner-item1-title px-5 pt-4">
            FS - QUILTED MAXI CROSS BAG
          </p>
          <div class="d-flex px-5 banner-item1-price-and-discount">
            <div class="d-flex">
              <p class="banner-item1-price">$534,33</p>
              <p class="banner-item1-discount">24% Off</p>
            </div>
            <p class="banner-item1-prices">$299,43</p>
          </div>
        </div>
        <div class="banner-item2">
          <div class="d-flex">
            <p class="banner-item2-title ps-5 pt-4">
              FS - Nike Air Max 270 React...
            </p>
            <p class="banner-item2-prices pt-4">$299,43</p>
          </div>
          <div class="d-flex ps-5 ms-5 banner-item2-price-and-discount">
            <div class="d-flex">
              <p class="banner-item1-price">$534,33</p>
              <p class="banner-item1-discount">24% Off</p>
            </div>
          </div>
        </div>
        <div class="banner-item3">
          <div>
            <p class="banner-item3-title ps-5 pt-4">
              FS - Nike Air Max 270 React...
            </p>
            <div class="d-flex ps-5">
              <p class="banner-item3-price">$534,33</p>
              <p class="banner-item3-discount">24% Off</p>
            </div>
          </div>
          <div class="  banner-item2-price-and-discount">
            <p class="banner-item3-prices pt-1">$299,43</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
