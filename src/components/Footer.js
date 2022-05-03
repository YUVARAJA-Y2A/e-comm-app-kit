import React from "react";
import "./styles/footer.css";

function Footer() {
  return (
    <div>
      <div class="footer-background">
        <div class="d-flex ">
          <div class="ecomm-logo-set">
            <div class="d-flex">
              <div class="logo-1 mt-1"></div>
              <div class="ps-1 pt-3 brand-title">E-Comm</div>
            </div>
            <p class="ecomm-subject pt-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever.Since the 1500s, when an unknown printer.
            </p>
          </div>
          <div class="followus-set">
            <p class="followus-title">Follow Us</p>
            <p class="followus-subject pt-1">
              Since the 1500s, when an unknown printer took a galley of type and
              scrambled.
            </p>
          </div>
          <div class="followus-set">
            <p class="followus-title">Contact Us</p>
            <p class="followus-subject pt-1">
              E-Comm , 4578 Marmora Road, Glasgow D04 89GR
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
