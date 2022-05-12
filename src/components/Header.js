import React from "react";
import "./styles/header.css";
import { BsPerson } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import { HiSearch } from "react-icons/hi";

function Header() {
  return (
    <div class="header-main">
      <div class="d-flex justify-content-between">
        <nav class="navbar navbar-expand navbar-light">
          <div class="d-flex">
            <div>
              <ul class="navbar-nav">
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle drop-down-lang"
                    href="#"
                    id="navbarDarkDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    EN
                  </a>
                  <ul
                    class="dropdown-menu dropdown-menu-dark"
                    aria-labelledby="navbarDarkDropdownMenuLink"
                  >
                    <li>
                      <a class="dropdown-item" href="#">
                        FR
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        SP
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        DU
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        CH
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div>
              <ul class="navbar-nav">
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle drop-down-lang"
                    href="#"
                    id="navbarDarkDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    USD
                  </a>
                  <ul
                    class="dropdown-menu dropdown-menu-dark"
                    aria-labelledby="navbarDarkDropdownMenuLink"
                  >
                    <li>
                      <a class="dropdown-item" href="#">
                        INR
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        CAD
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        EUR
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        YEN
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div class="d-flex">
          <div class="d-flex align-items-center">
            <BsPerson size={35} />
            <div class="px-1 my-profile">My profile</div>
          </div>
          <div class="d-flex align-items-center px-3">
            <div>
              <BiCart size={35} class="position-absolute" />
              <div class="ps-3">
                <p class="cart-number">2</p>
              </div>
            </div>
            <div class="ps-3 items">Items</div>
          </div>
          <div class="d-flex align-items-center ps-3">
            <div class="price pe-1">$0.00</div>
            <HiSearch size={25} />
          </div>
        </div>
      </div>
      <div class="d-flex align-items-center justify-content-between">
        {/* E-comm logo-set */}
        <div class="d-flex">
          <div class="logo-1"></div>
          <div class="ps-1 brand-title">E-Comm</div>
        </div>
        <div>
          <div class="d-flex justify-content-between">
            <div class="home-drpdwn pe-4">
              <a class="nav-home-btn" href="#">
                HOME
              </a>
              <div class="home-button-setup"></div>
              {/* <div class="home-dropdown"></div> */}
            </div>
            <div class="px-4">
              <a class="nav-bags-btn" href="#">
                BAGS
              </a>
            </div>
            <div class="px-4">
              <a class="nav-sneakers-btn" href="#">
                SNEAKERS
              </a>
            </div>
            <div class="px-4">
              <a class="nav-belt-btn" href="#">
                BELT
              </a>
            </div>
            <div class="ps-4">
              <a class="nav-contact-btn" href="#">
                CONTACT
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
