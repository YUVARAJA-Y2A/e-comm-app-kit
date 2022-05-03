import React from "react";
import "./styles/header.css";
import { BsPerson } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import { HiSearch } from "react-icons/hi";

function Header() {
  return (
    <div>
      <div class="d-flex justify-content-between">
        <nav class="navbar navbar-expand navbar-light">
          <div class="d-flex flex-row">
            <div class="mx-1">
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
            <div class="mx-1">
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
        <div class="d-flex mt-2">
          <div class="d-flex">
            <BsPerson size={25} />
            <p class="px-1 my-profile">My profile</p>
          </div>
          <div class="d-flex px-3">
            <BiCart size={25} />
            <p class="ps-3 items">Items</p>
          </div>
          <div class="d-flex ps-3">
            <p class="price pe-1">$0.00</p>
            <HiSearch size={25} />
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-between">
        <div class="d-flex">
          <div class="logo-1 mt-2 pt-5 ms-2"></div>
          <div class="ps-1 pt-3 brand-title">E-Comm</div>
        </div>
        <div class="nav-options pt-2">
          <a class="nav-home-btn pe-5" href="#">
            HOME
          </a>
          <a class="nav-bags-btn px-5" href="#">
            BAGS
          </a>
          <a class="nav-sneakers-btn px-5" href="#">
            SNEAKERS
          </a>
          <a class="nav-belt-btn px-5" href="#">
            BELT
          </a>
          <a class="nav-contact-btn ps-5" href="#">
            CONTACT
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
