import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed-top ${
        isScrolled ? "bg-nav" : "bg-transparent"
      } transition-all`}>
      <div className="container d-flex py-3">
        <div className="logo mr-auto mt-2">
          <span className="text-white brand-logo">
            <a href="/">
              <div className="d-flex">
                <img
                  src="assets/img/Logoo.png"
                  alt="Logo"
                  class="logo-nav"
                  style={{ maxWidth: "100%", height: "auto", width: "2.3rem" }}
                />
                <h6 className="font-weight-bolder text-white mt-2 ml-1">
                  PT. MALAYAPURA SPICE GROUP
                </h6>
              </div>
            </a>
          </span>
        </div>

        {/* Tombol Toggle untuk Mobile */}
        <div className="d-lg-none">
          <button onClick={toggleMenu} className="toggle-button">
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
          </button>
        </div>

        {/* Menu Navigasi untuk Desktop */}
        <nav className="nav-menu d-none d-lg-block">
          <ul>
            <li>
              <a className="activee" href="/">
                Home
              </a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#product">Product</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>

        {/* Dropdown Menu untuk Mobile */}
        <div className={`mobile-nav-menu ${isMenuOpen ? "d-block" : "d-none"}`}>
          <ul>
            <li>
              <a className="activee" href="/">
                Home
              </a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#product">Product</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="header-social-links">
          <a
            href="https://www.facebook.com/profile.php?id=61561787881523&mibextid=ZbWKwL"
            target="_blank"
            className="facebook">
            <i className="icofont-facebook"></i>
          </a>
          <a
            href="https://www.instagram.com/malayapuraspice/"
            target="_blank"
            className="instagram">
            <i className="icofont-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/company/pt-malayapura-spice-group/"
            target="_blank"
            className="instagram">
            <i className="icofont-linkedin"></i>
          </a>
        </div>
      </div>

      {/* Style untuk Mobile Menu */}
      <style jsx>{`
        .mobile-nav-menu {
          display: block; /* Selalu tampilkan */
          overflow: hidden; /* Sembunyikan overflow */
          max-height: ${isMenuOpen ? "300px" : "0"}; /* Atur tinggi maksimum */
          background-color: #333; /* Warna latar belakang untuk dropdown */
          transition: max-height 0.3s ease-in-out; /* Transisi untuk tampilan menu */
          position: absolute; /* Menggunakan posisi absolute untuk dropdown */
          top: 60px; /* Sesuaikan dengan tinggi header */
          left: 0;
          right: 0;
          z-index: 1000; /* Pastikan berada di atas elemen lainnya */
        }
        .mobile-nav-menu ul {
          list-style-type: none; /* Menghilangkan bullet */
          padding: 0; /* Menghilangkan padding */
          margin: 0; /* Menghilangkan margin */
        }
        .mobile-nav-menu li {
          padding: 10px 20px; /* Tambahkan padding untuk item menu */
        }
        .mobile-nav-menu a {
          color: white; /* Warna teks untuk item menu */
          text-decoration: none; /* Menghilangkan garis bawah */
        }
        .toggle-button {
          background: transparent;
          border: none;
          cursor: pointer;
          color: white;
          font-size: 24px; /* Ukuran ikon */
        }
      `}</style>
    </header>
  );
};

export default Navbar;
