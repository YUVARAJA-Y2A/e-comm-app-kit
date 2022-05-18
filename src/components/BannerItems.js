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

    const filteredData = IMAGES.filter((image) => image.category === dat);
    setRenderData(filteredData);
    const checkData = IMAGES.find((image) => image.category === dat);
    const notfound = checkData === undefined ? true : false;
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
              <div class="">
                <div class="div-hovering-box pt-4 px-2">
                  <div class="hovering-box d-flex justify-content-center">
                    <div class="overlay-circle me-3">
                      <div class="div-icons pt-3">
                        <svg
                          viewBox="0 0 19 17"
                          fill="none"
                          class="heart-icon"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M12.9366 2.71101C13.5805 2.71167 14.2104 2.89815 14.7508 3.24812C15.2913 3.59808 15.7192 4.09662 15.9831 4.68385C16.2471 5.27107 16.336 5.92205 16.2391 6.55854C16.1421 7.19504 15.8635 7.78998 15.4366 8.27198C14.8236 8.96298 9.59667 13.856 9.59667 13.856C9.59667 13.856 4.35866 8.96299 3.74566 8.26099C3.20446 7.65353 2.90674 6.86759 2.90966 6.05402C2.92482 5.17729 3.28373 4.34153 3.90911 3.72688C4.53449 3.11222 5.37629 2.76783 6.25316 2.76783C7.13003 2.76783 7.97178 3.11222 8.59716 3.72688C9.22254 4.34153 9.58151 5.17729 9.59667 6.05402C9.59667 5.61488 9.68313 5.18001 9.85119 4.7743C10.0192 4.36859 10.2656 3.99998 10.5761 3.68946C10.8866 3.37894 11.2552 3.1326 11.6609 2.96455C12.0667 2.7965 12.5015 2.71003 12.9407 2.71003L12.9366 2.71101ZM12.9407 0.481027C11.7344 0.478922 10.5603 0.870381 9.59667 1.59602C8.49271 0.776633 7.12481 0.394208 5.75597 0.522286C4.38714 0.650364 3.11393 1.27991 2.18114 2.28986C1.24835 3.29982 0.721796 4.61892 0.702687 5.9936C0.683579 7.36828 1.17327 8.70151 2.07763 9.73701C2.70363 10.455 6.82663 14.315 8.07763 15.481C8.49055 15.8672 9.0348 16.082 9.60015 16.082C10.1655 16.082 10.7097 15.8672 11.1226 15.481C12.3666 14.316 16.4726 10.466 17.1066 9.74903C17.8179 8.9455 18.2822 7.95367 18.4435 6.89271C18.6048 5.83175 18.4564 4.74677 18.016 3.76814C17.5756 2.7895 16.862 1.95879 15.961 1.37586C15.06 0.792935 14.0098 0.482552 12.9366 0.482003L12.9407 0.481027Z"
                            fill="#33A0FF"
                          />
                        </svg>
                      </div>
                    </div>
                    <div class="overlay-circle ms-3">
                      <div class="div-icons pt-3">
                        <svg
                          class="cart-icon"
                          viewBox="0 0 18 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M14.5542 12.628C15.0683 12.6273 15.5662 12.4482 15.963 12.1215C16.3598 11.7947 16.631 11.3404 16.7303 10.836L17.8453 5.263C17.9098 4.94002 17.902 4.60671 17.8224 4.28711C17.7428 3.96751 17.5933 3.66955 17.3848 3.41461C17.1762 3.15968 16.9138 2.95412 16.6163 2.81274C16.3188 2.67137 15.9936 2.59769 15.6643 2.59698H4.56426V1.48199C4.564 1.18714 4.44697 0.90439 4.23876 0.695618C4.03055 0.486845 3.74812 0.369039 3.45327 0.367981H1.23827C0.948466 0.376663 0.673439 0.497871 0.471516 0.705933C0.269594 0.913994 0.156667 1.19255 0.156667 1.48248C0.156667 1.77242 0.269594 2.05097 0.471516 2.25903C0.673439 2.4671 0.948466 2.5883 1.23827 2.59698H2.35326V13.742C1.91199 13.74 1.48004 13.8691 1.11217 14.1128C0.744302 14.3565 0.457066 14.7039 0.286824 15.111C0.116582 15.5181 0.0709994 15.9666 0.155873 16.3997C0.240747 16.8327 0.45224 17.2308 0.76357 17.5436C1.0749 17.8563 1.47206 18.0696 1.90471 18.1564C2.33737 18.2432 2.78605 18.1997 3.19393 18.0312C3.60181 17.8628 3.95054 17.5772 4.19591 17.2104C4.44128 16.8436 4.57225 16.4123 4.57226 15.971H12.3383C12.3401 16.4097 12.4717 16.838 12.7168 17.2019C12.9618 17.5658 13.3091 17.8489 13.7149 18.0156C14.1207 18.1822 14.5668 18.2249 14.9968 18.1382C15.4269 18.0516 15.8216 17.8394 16.1312 17.5286C16.4408 17.2177 16.6513 16.8222 16.7363 16.3918C16.8212 15.9614 16.7767 15.5155 16.6084 15.1104C16.4401 14.7052 16.1556 14.359 15.7907 14.1155C15.4258 13.8719 14.997 13.742 14.5583 13.742H4.57128V12.628H14.5542ZM15.6693 4.828L14.5542 10.401H4.56725V4.828H15.6673H15.6693Z"
                            fill="#33A0FF"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <img
                    src={datum.image}
                    class="card-img-top item-image"
                    alt="..."
                  ></img>
                </div>
              </div>
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
