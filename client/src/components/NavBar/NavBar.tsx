import "./NavBar.css";
import { Link } from "react-router-dom";
import { motion, Variants } from "framer-motion";
import { useState } from "react";

const menuVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

function NavBar() {
  const [menuOpen, setMenuOpen] = useState("hidden");

  return (
    <motion.div
      className="navBar-Container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="navBar-title">FakeStore</h1>
      <div>
        <motion.button
          className="navBar-menu-btn"
          onClick={() => {
            menuOpen === "hidden"
              ? setMenuOpen("visible")
              : setMenuOpen("hidden");
          }}
        >
          Menu
        </motion.button>
        <motion.div
          className="navBar-menu-layout"
          variants={menuVariants}
          animate={menuOpen}
          onClick={() => { setMenuOpen("hidden")}}
        >
          <motion.ul className="navBar-links-container">
            <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/">Home</Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/about">About</Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/shopping-cart">My Cart</Link>
            </motion.li>
          </motion.ul>
        </motion.div>
      </div>
      {/* <div>
            <input type="text" className='search-input'/>
            <button className='search-btn'>
              <img 
              src="https://www.iconpacks.net/icons/2/free-search-icon-2907-thumb.png" 
              alt="search-icon" 
              className='search-icon'
              />
            </button>
        </div> */}
    </motion.div>
  );
}

export default NavBar;
