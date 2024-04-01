import styles from "./Navbar.module.scss";
import { useEffect, useState, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { VscThreeBars } from "react-icons/vsc";
import { IoIosArrowDown, IoIosArrowUp, IoMdArrowForward } from "react-icons/io";
import placeholder from "../../assets/img/img_placeholder.jpg";
import newRequest from "../../utils/newRequest";

const Navbar = () => {
  const [intoView, setIntoView] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [browseCategories, setBrowseCategories] = useState(false);
  const [explore, setExplore] = useState(false);

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const isNavActive = () => {
    window.scrollY > 100 ? setIntoView(true) : setIntoView(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isNavActive);

    return () => {
      window.removeEventListener("scroll", isNavActive);
    };
  }, [intoView]);

  const toggleDropdown = (e) => {
    e.nativeEvent.stopImmediatePropagation();
    setShowDropdown(!showDropdown);
  };

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const handleLogOut = async () => {
    try {
      await newRequest.post("/auth/logout");
      localStorage.setItem("currentUser", null);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.navbars}>
      <div className={styles.desktop_nav}>
        <nav
          className={`${
            intoView || pathname !== "/"
              ? ` ${styles.navbar} ${styles.isActive}`
              : styles.navbar
          }`}
        >
          <div
            className={`${
              intoView || pathname !== "/"
                ? ` sw ${styles.container} ${styles.isActive}`
                : `sw ${styles.container}`
            }`}
          >
            <Link to={"/"}>
              <div className={styles.logo}>
                <span className={styles.text}>fiverr</span>
                <span className={styles.dot}>.</span>
              </div>
            </Link>
            <ul className={styles.links}>
              <li>
                <a href="#">Fiverr Business</a>
              </li>
              <li>
                <a href="#">Explore</a>
              </li>
              <li>
                <a href="#">English</a>
              </li>
              {!currentUser && (
                <li>
                  <Link to="/login">Sign In</Link>
                </li>
              )}
              <li>
                {!currentUser?.isSeller && <a href="#">Become a Seller</a>}
              </li>
              <li>
                <button className={styles.white}>Join</button>
              </li>

              {currentUser && (
                <div className={styles.user}>
                  <div className={styles.user_info}>
                    <img src={currentUser.img || placeholder} alt="user" />
                    <span>{currentUser?.username}</span>
                  </div>
                  <div className={styles.options}>
                    {currentUser.isSeller && (
                      <ul>
                        <Link to={"/gigs"}>
                          <li>Gigs</li>
                        </Link>
                        <Link to={"/add"}>
                          <li>Add New Gigs</li>
                        </Link>
                      </ul>
                    )}
                    <ul>
                      <Link to={"/orders"}>
                        <li>Orders</li>
                      </Link>
                      <Link to={"/messages"}>
                        <li>Messages</li>
                      </Link>
                      {currentUser && <li onClick={handleLogOut}>Log out</li>}
                    </ul>
                  </div>
                </div>
              )}
            </ul>
          </div>

          {(intoView || pathname !== "/") && (
            <div className={styles.menu_container}>
              <ul className={`sw ${styles.menu}`}>
                <li>
                  <a href="#">Graphics & Design</a>
                </li>
                <li>
                  <a href="#">Video & Animation</a>
                </li>
                <li>
                  <a href="#">Writing & Translation</a>
                </li>
                <li>
                  <a href="#">AI Services</a>
                </li>
                <li>
                  <a href="#">Digital Marketing</a>
                </li>
                <li>
                  <a href="#">Music & Audio</a>
                </li>
                <li>
                  <a href="#">Programming & Tech</a>
                </li>
                <li>
                  <a href="#">Business</a>
                </li>
                <li>
                  <a href="#">Lifestyle</a>
                </li>
              </ul>
            </div>
          )}
        </nav>
      </div>
      <div className={styles.mobile_nav}>
        <nav className={`sw ${styles.mobile_navbar}`}>
          <div className={styles.top_bar}>
            <VscThreeBars
              className={styles.hamburger}
              onClick={() => setShowDropdown(!showDropdown)}
            />
            <Link to={"/"} className={styles.logo}>
              <span className={styles.text}>fiverr</span>
              <span className={styles.dot}>.</span>
            </Link>
            {currentUser && <button className={styles.white}>Join</button>}
          </div>
          {showDropdown && (
            <div
              className={
                showDropdown
                  ? `${styles.show_dropdown}  ${styles.dropdown_wrapper} `
                  : styles.dropdown_wrapper
              }
            >
              <div className={styles.dropdown}>
                <div className={styles.links}>
                  <Link to="/login">Sign in</Link>
                  <div className={styles.browse_categories_links_container}>
                    <span
                      className={styles.browse_categories_title}
                      onClick={() => setBrowseCategories(!browseCategories)}
                    >
                      Browse Categories
                      {browseCategories ? (
                        <IoIosArrowUp className={styles.arrow} />
                      ) : (
                        <IoIosArrowDown className={styles.arrow} />
                      )}
                    </span>
                    {browseCategories && (
                      <div className={styles.browse_categories_links}>
                        <Link>
                          Graphics & Design <IoMdArrowForward />
                        </Link>
                        <Link>
                          Video & Animation <IoMdArrowForward />
                        </Link>
                        <Link>
                          Writing & Translation <IoMdArrowForward />
                        </Link>
                        <Link>
                          AI Services <IoMdArrowForward />
                        </Link>
                        <Link>
                          Music & Audio <IoMdArrowForward />
                        </Link>
                        <Link>
                          Digital Marketing <IoMdArrowForward />
                        </Link>
                        <Link>
                          Programming & Tech <IoMdArrowForward />
                        </Link>
                        <Link>
                          Business
                          <IoMdArrowForward />
                        </Link>
                        <Link>
                          Lifestyle <IoMdArrowForward />
                        </Link>
                      </div>
                    )}
                  </div>
                  <div className={styles.explore_links_container}>
                    <span
                      className={styles.explore_title}
                      onClick={() => setExplore(!explore)}
                    >
                      Explore
                      {explore ? (
                        <IoIosArrowUp className={styles.arrow} />
                      ) : (
                        <IoIosArrowDown className={styles.arrow} />
                      )}
                    </span>
                    {explore && (
                      <div className={styles.explore_links}>
                        <Link>
                          Fiverr Business <IoMdArrowForward />
                        </Link>
                        <Link>
                          Become a Seller <IoMdArrowForward />
                        </Link>
                      </div>
                    )}
                  </div>
                  <Link>Gigs</Link>
                  <Link>Add New Gigs</Link>
                  <Link>Orders</Link>
                  <Link>Messages</Link>
                  {currentUser && <Link>Log out</Link>}
                  <div>
                    <ul className={styles.links}>
                      {!currentUser && (
                        <div className={styles.user}>
                          <div className={styles.user_info}>
                            <img
                              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.v6Gg5t3unw1Kp3AL0JQYNgHaHa%26pid%3DApi%26h%3D160&f=1&ipt=fee430805a4e227ae90895fa735bfb8da5b65375a785e4af5a39978e8e724815&ipo=images"
                              alt="user"
                            />
                            <span>{currentUser?.username}</span>
                          </div>
                        </div>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </nav>
      </div>
      <div className={styles.ipad_nav}>
        <nav className={`sw ${styles.ipad_navbar}`}>
          <div className={styles.top_bar}>
            <div className={styles.hamburger_and_logo}>
              <VscThreeBars
                className={styles.hamburger}
                onClick={() => setShowDropdown(!showDropdown)}
              />
              <Link to={"/"} className={styles.logo}>
                <span className={styles.text}>fiverr</span>
                <span className={styles.dot}>.</span>
              </Link>
            </div>
            <div className={styles.menu_inside_topbar}>
              {!currentUser && (
                <li>
                  <Link to="/login">Sign In</Link>
                </li>
              )}
              {currentUser && <button className={styles.white}>Join</button>}
            </div>
          </div>
          {showDropdown && (
            <div
              className={
                showDropdown
                  ? `${styles.show_dropdown}  ${styles.dropdown_wrapper} `
                  : styles.dropdown_wrapper
              }
              onClick={toggleDropdown}
            >
              <div className={styles.dropdown}>
                <div className={styles.links}>
                  {!currentUser && (
                    <li>
                      <Link to="/login">Sign In</Link>
                    </li>
                  )}
                  <div className={styles.browse_categories_links_container}>
                    <span
                      className={styles.browse_categories_title}
                      onClick={() => setBrowseCategories(!browseCategories)}
                    >
                      Browse Categories
                      {browseCategories ? (
                        <IoIosArrowUp className={styles.arrow} />
                      ) : (
                        <IoIosArrowDown className={styles.arrow} />
                      )}
                    </span>
                    {browseCategories && (
                      <div className={styles.browse_categories_links}>
                        <Link>
                          Graphics & Design <IoMdArrowForward />
                        </Link>
                        <Link>
                          Video & Animation <IoMdArrowForward />
                        </Link>
                        <Link>
                          Writing & Translation <IoMdArrowForward />
                        </Link>
                        <Link>
                          AI Services <IoMdArrowForward />
                        </Link>
                        <Link>
                          Music & Audio <IoMdArrowForward />
                        </Link>
                        <Link>
                          Digital Marketing <IoMdArrowForward />
                        </Link>
                        <Link>
                          Programming & Tech <IoMdArrowForward />
                        </Link>
                        <Link>
                          Business
                          <IoMdArrowForward />
                        </Link>
                        <Link>
                          Lifestyle <IoMdArrowForward />
                        </Link>
                      </div>
                    )}
                  </div>
                  <div className={styles.explore_links_container}>
                    <span
                      className={styles.explore_title}
                      onClick={() => setExplore(!explore)}
                    >
                      Explore
                      {explore ? (
                        <IoIosArrowUp className={styles.arrow} />
                      ) : (
                        <IoIosArrowDown className={styles.arrow} />
                      )}
                    </span>
                    {explore && (
                      <div className={styles.explore_links}>
                        <Link>
                          Fiverr Business <IoMdArrowForward />
                        </Link>
                        <Link>
                          Become a Seller <IoMdArrowForward />
                        </Link>
                      </div>
                    )}
                  </div>
                  <Link>Gigs</Link>
                  <Link>Add New Gigs</Link>
                  <Link>Orders</Link>
                  <Link>Messages</Link>
                  {currentUser && <Link>Log out</Link>}
                  <div>
                    <ul className={styles.links}>
                      {!currentUser && (
                        <div className={styles.user}>
                          <div className={styles.user_info}>
                            <img
                              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.v6Gg5t3unw1Kp3AL0JQYNgHaHa%26pid%3DApi%26h%3D160&f=1&ipt=fee430805a4e227ae90895fa735bfb8da5b65375a785e4af5a39978e8e724815&ipo=images"
                              alt="user"
                            />
                            <span>{currentUser?.username}</span>
                          </div>
                        </div>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
