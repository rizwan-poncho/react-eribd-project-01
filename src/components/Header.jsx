import React from "react";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// index.js or App.js
import "tw-elements";
import logo from "../assets/bpccilogo.png";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Tooltip, initTWE, Collapse, Ripple } from "tw-elements";
import { NavLink } from "react-router-dom";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  const [anchorEl1, setAnchorEl1] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const open1 = Boolean(anchorEl1);
  const open2 = Boolean(anchorEl2);
  const handleClick1 = (event) => {
    setAnchorEl1(event.currentTarget);
  };
  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose1= () => {
    setAnchorEl1(null);
  };
  const handleClose2= () => {
    setAnchorEl2(null);
  };
  useEffect(() => {
    initTWE({ Tooltip, Collapse, Ripple });
  }, []);

  return (
    <>
      <header>
        <nav
          class="relative lg:px-20  flex w-full items-center justify-between bg-white py-2 shadow-dark-mild  lg:flex-wrap lg:justify-start lg:py-6"
          data-twe-navbar-ref
        >
          <div class="flex w-full flex-wrap items-center justify-between px-3">
            <div class="flex justify-between items-center w-full">
              <div className="md:hidden block">
                <img src={logo} className="h-12 object-contain" />
              </div>
              <div>
                <button
                  class="block border-0 bg-transparent px-2 text-black/50 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
                  type="button"
                  data-twe-collapse-init
                  data-twe-target="#navbarSupportedContentY"
                  aria-controls="navbarSupportedContentY"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:stroke-black/50 dark:[&>svg]:stroke-neutral-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </div>

            <div
              class="!visible hidden grow basis-[100%] items-center text-center lg:!flex lg:basis-auto lg:text-left"
              id="navbarSupportedContentY"
              data-twe-collapse-item
            >
              <div className="flex w-full md:justify-between justify-center mt-3 md:mt-0 md:items-center ">
                <div className="md:block hidden">
                  <img src={logo} className="h-16 object-contain" />
                </div>
                <div>
                  <ul
                    class="me-auto flex flex-col lg:flex-row"
                    data-twe-navbar-nav-ref
                  >
                     <li class="mb-4 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
                      <NavLink
                        to={"/"}
                        className={({ isActive }) =>
                          isActive
                            ? "block uppercase text-black-700 tracking-wide font-semibold transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none  lg:px-2"
                            : "block uppercase text-green-700 tracking-wide font-semibold transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none  lg:px-2"
                        }
                        data-twe-nav-link-ref
                        data-twe-ripple-init
                        data-twe-ripple-color="light"
                      >
                        Home
                      </NavLink>
                    </li>
                    <li class="mb-4 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
                      <NavLink
                       aria-controls={open ? "basic-menu" : undefined}
                       aria-haspopup="true"
                       aria-expanded={open ? "true" : undefined}
                       onClick={handleClick1}
                       
                        className="block uppercase text-green-700 tracking-wide font-semibold transition duration-200 hover:text-black/80 hover:ease-in-out  active:text-black/80 motion-reduce:transition-none  lg:px-2"
                        data-twe-nav-link-ref
                        data-twe-ripple-init
                        data-twe-ripple-color="light"
                      >
                      {({ isActive }) => (
                          <>
                           About Us {" "}
                            <FontAwesomeIcon  
                        
                              icon={faCaretDown}
                              className={
                                isActive ? "text-black-700" : "text-green-700"
                              }
                              style={{ transition: "color 0.2s ease-in-out" }}
                            />
                          </>
                        )}
                      </NavLink>
                  

                      <Menu
                        
                        anchorEl={anchorEl1}
                        open={open1}
                        onClose={handleClose1}
                        MenuListProps={{
                          "aria-labelledby": "basic-button",
                        }}
                      >
                        <MenuItem onClick={handleClose1}>
                        <NavLink to={"/about-us"}>
                          About BPCCI
                        </NavLink>
                        </MenuItem>
                        <MenuItem onClick={handleClose1}><NavLink>
                          Welcome Message
                        </NavLink></MenuItem>
                        <MenuItem onClick={handleClose1}><NavLink>
                          Board of Director
                        </NavLink></MenuItem>
                        <MenuItem onClick={handleClose1}><NavLink>
                          Secretariat
                        </NavLink></MenuItem>
                      </Menu>
                    </li>
                    <li class="mb-4 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
                      <NavLink
                       
                       aria-controls={open ? "basic-menu" : undefined}
                       aria-haspopup="true"
                       aria-expanded={open ? "true" : undefined}
                       onClick={handleClick2}
                        className="block uppercase text-green-700 tracking-wide font-semibold transition duration-200 hover:text-black/80 hover:ease-in-out  active:text-black/80 motion-reduce:transition-none  lg:px-2"
                        data-twe-nav-link-ref
                        data-twe-ripple-init
                        data-twe-ripple-color="light"
                      >
                      {({ isActive }) => (
                          <>
                           Membership {" "}
                            <FontAwesomeIcon 
                       
                              icon={faCaretDown}
                              className={
                                isActive ? "text-black-700" : "text-green-700"
                              }
                              style={{ transition: "color 0.2s ease-in-out" }}
                            />
                          </>
                        )}
                      </NavLink>
                  

                      <Menu
                        anchorEl={anchorEl2}
                        open={open2}
                        onClose={handleClose2}
                        MenuListProps={{
                          "aria-labelledby": "basic-button",
                        }}
                      >
                        <MenuItem onClick={handleClose2}>
                        <NavLink>
                          Type of Memebership
                        </NavLink>
                        </MenuItem>
                        <MenuItem onClick={handleClose2}><NavLink>
                          Memebership Procedure
                        </NavLink></MenuItem>
                        <MenuItem onClick={handleClose2}><NavLink>
                          Membership Form Download
                        </NavLink></MenuItem>
                       
                      </Menu>
                    </li>
                    
                  
                    <li class="mb-2 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
                      <NavLink
                        to={"/news-publication"}
                        className={({ isActive }) =>
                          isActive
                            ? "block uppercase text-black-700 tracking-wide font-semibold transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none  lg:px-2"
                            : "block uppercase text-green-700 tracking-wide font-semibold transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none  lg:px-2"
                        }
                        data-twe-nav-link-ref
                        data-twe-ripple-init
                        data-twe-ripple-color="light"
                      >
                        News & Publication
                      </NavLink>
                    </li>
                    <li class="mb-2 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
                      <NavLink
                        to={"/gallery"}
                        className={({ isActive }) =>
                          isActive
                            ? "block uppercase text-black-700 tracking-wide font-semibold transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none  lg:px-2"
                            : "block uppercase text-green-700 tracking-wide font-semibold transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none  lg:px-2"
                        }
                        data-twe-nav-link-ref
                        data-twe-ripple-init
                        data-twe-ripple-color="light"
                      >
                        Gallery
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
