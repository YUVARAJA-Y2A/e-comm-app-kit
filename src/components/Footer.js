import React from "react";
import "./styles/footer.css";

function Footer() {
  return (
    <div>
      <div class="footer-background">
        <div class="d-flex justify-content-evenly footer-topset">
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
            <div class="d-flex">
              <div class="fb-icon"></div>
              <div class="twitter-icon"></div>
            </div>
          </div>
          <div class="contactus-set">
            <p class="contactus-title">Contact Us</p>
            <p class="contactus-subject">
              E-Comm , 4578 Marmora Road, Glasgow D04 89GR
            </p>
          </div>
        </div>
        <div class="footer-infos d-flex justify-content-around">
          <div>
            <p class="title-information">Infomation</p>
            <p class="content-information">
              About Us
              <br />
              Information
              <br />
              Privacy Policy
              <br />
              Terms & Conditions
            </p>
          </div>
          <div>
            <p class="title-service">Service</p>
            <p class="content-service">
              About Us
              <br />
              Information
              <br />
              Privacy Policy
              <br />
              Terms & Conditions
            </p>
          </div>
          <div>
            <p class="title-myaccount">My Account</p>
            <p class="content-aboutus">
              About Us
              <br />
              Information
              <br />
              Privacy Policy
              <br />
              Terms & Conditions
            </p>
          </div>
          <div>
            <p class="title-ouroffers">Our Offers</p>
            <p class="content-ouroffers">
              About Us
              <br />
              Information
              <br />
              Privacy Policy
              <br />
              Terms & Conditions
            </p>
          </div>
        </div>
        <div class="footer-line pt-5">
          <svg
            width="1125"
            height="2"
            viewBox="0 0 1182 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1181.05 0.0102539H0.19458V1.17915H1181.05V0.0102539Z"
              fill="#F6F7F8"
            />
          </svg>
        </div>
        <div class="d-flex justify-content-between">
          <p class="footer-trademark">
            © 2018 Ecommerce theme by www.bisenbaev.com
          </p>
          <div class="brand-logos mt-4"></div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
