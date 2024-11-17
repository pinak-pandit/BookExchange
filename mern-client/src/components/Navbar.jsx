import { useEffect, useState } from "react";
import { FaBlog } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom"; // Use location for page detection

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation(); // Get the current location

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { link: "Home", path: "/" },
    { link: "Exchange", path: "/exchange" },
    { link: "Dashboard", path: "/user/dashboard" },
    { link: "Logout", path: "/logout" }, // Added Logout item
  ];

  // Check if the current page is login or signup, if so, hide navbar
  const isAuthPage = location.pathname === "/login" || location.pathname === "/create-user";
  if (isAuthPage) {
    return null; // Return null to not render the navbar on these pages
  }

  return (
    <header className="w-full bg-gradient-to-r from-orange-400 via-red-400 to-yellow-300 shadow-md fixed top-0 left-0 right-0 transition-all ease-in duration-300 z-50">
      <nav className={`py-4 lg:px-24 px-4 ${isSticky ? "sticky top-0 left-0 right-0" : ""}`}>
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-white flex items-center gap-2">
            <FaBlog className="inline-block text-yellow-300" />
            The Book Exchange
          </Link>

          {/* Nav items for large devices */}
          <ul className="md:flex space-x-12 hidden navitems">
            {navItems.map(({ link, path }) => (
              <Link
                key={path}
                to={path}
                className="block text-base cursor-pointer uppercase text-white hover:text-yellow-200 transition-all"
              >
                {link}
              </Link>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
