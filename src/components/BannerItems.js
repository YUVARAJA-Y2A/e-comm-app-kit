import { useState } from "react";
import IMAGES from "../Images";
import "./styles/banneritem.css";

function BannerItems() {
  const handleData = (dat) => {
    if (dat === "All") {
      setshowstock(false);

      return setRenderData(IMAGES);
    }
    // if (IMAGES.isArray({ category: dat })) {
    //   console.log();
    // }
    console.log(dat);
    const filteredData = IMAGES.filter((image) => image.category === dat);
    setRenderData(filteredData);

    const checkData = IMAGES.find((image) => image.category === dat);
    console.log(checkData);
    const notfound = checkData === undefined ? true : false;
    console.log(notfound);
    setshowstock(notfound);
  };

  const loadmore = () => {
    let a = 4;
    do {
      a = a + 4;
    } while (a <= dataRender.length);
    console.log(a);
    setsliceval(a);
  };
  const showless = () => {
    setsliceval(4);
  };
  const [sliceval, setsliceval] = useState(4);
  const [showstock, setshowstock] = useState();
  const [dataRender, setRenderData] = useState(IMAGES);
  // const category = IMAGES.map((image) => image.category);
  // const uniqueCategory = [...new Set(category)];
  // uniqueCategory.unshift("All");

  return (
    <div>
      <div class="banner-item-title py-5">BEST SELLER</div>

      <div class="banner-item-navs d-flex justify-content-evenly  pb-3">
        <a class="banner-item-navs-all" onClick={() => handleData("All")}>
          All
        </a>
        <a class="banner-item-navs-bags" onClick={() => handleData("Bags")}>
          Bags
        </a>
        <a
          class="banner-item-navs-sneakers"
          onClick={() => handleData("Sneakers")}
        >
          Sneakers
        </a>
        <a class="banner-item-navs-belt" onClick={() => handleData("Belt")}>
          Belt
        </a>
        <a
          class="banner-item-navs-sunglasses"
          onClick={() => handleData("Sunglasses")}
        >
          Sunglasses
        </a>
      </div>
      <div class="mx-5">
        <div class="product-items-imgs">
          {dataRender.slice(0, sliceval).map((datum) => (
            <div key={datum.id} class="card imagecard m-2">
              <img
                src={datum.image}
                class="card-img-top item-image"
                alt="..."
              ></img>
              <div class="card-body">
                <p class="product-img-title">Nike Air Max 270 React</p>
                <div class="rating-stars d-flex justify-content-center">
                  <svg
                    width="125"
                    height="16"
                    viewBox="0 0 125 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M69.1427 6.26868L64.8912 9.79065L66.1419 15.5146L62.011 12.0566L57.614 15.3307L59.3128 9.67065L55.3467 5.9707L60.5271 5.93066L62.4738 0.369751L63.977 6.00574L69.1427 6.26868Z"
                      fill="#FFC600"
                    />
                    <path
                      d="M41.6917 6.26868L37.4403 9.79065L38.6911 15.5146L34.5601 12.0566L30.1631 15.3307L31.8618 9.67065L27.8958 5.9707L33.0762 5.93066L35.0229 0.369751L36.5261 6.00574L41.6917 6.26868Z"
                      fill="#FFC600"
                    />
                    <path
                      d="M14.2428 6.26868L9.9913 9.79065L11.242 15.5146L7.1111 12.0566L2.71407 15.3307L4.41286 9.67065L0.446777 5.9707L5.62724 5.93066L7.5739 0.369751L9.07709 6.00574L14.2428 6.26868Z"
                      fill="#FFC600"
                    />
                    <path
                      d="M96.5921 6.26868L92.3407 9.79065L93.5914 15.5146L89.4605 12.0566L85.0635 15.3307L86.7623 9.67065L82.7961 5.9707L87.9766 5.93066L89.9233 0.369751L91.4265 6.00574L96.5921 6.26868Z"
                      fill="#FFC600"
                    />
                    <path
                      d="M124.043 6.26868L119.792 9.79065L121.043 15.5146L116.912 12.0566L112.515 15.3307L114.213 9.67065L110.247 5.9707L115.428 5.93066L117.374 0.369751L118.878 6.00574L124.043 6.26868Z"
                      fill="#C1C8CE"
                    />
                  </svg>
                </div>
                <div class="d-flex item-price-info justify-content-center pt-2">
                  <p class="disc-price px-2">$299,43</p>
                  <p class="org-price px-2 pt-1">$534,33</p>
                  <p class="disc-offered px-2 pt-1">24% Off</p>
                </div>
              </div>
            </div>
          ))}
          {showstock && <h2 class="stock-message">Comming Soon</h2>}
        </div>
      </div>
      <div class="d-flex justify-content-center mt-3 pt-5">
        <a
          class="load-more-button"
          onClick={sliceval <= dataRender.length ? loadmore : showless}
        >
          <p class="banner-end-text">
            {sliceval <= dataRender.length ? "LOAD MORE" : "SHOW LESS"}
          </p>
          <svg
            class="banner-end-text-underline"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M115.5 0.172974H0.500488V3.17297H115.5V0.172974Z"
              fill="#33A0FF"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default BannerItems;
