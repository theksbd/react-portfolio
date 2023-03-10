import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import { IoMdReorder } from "react-icons/io";

function Navbar() {
  const [expandNavBar, setExpandNavBar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandNavBar(false);
  }, [location]);

  return (
    <div className="navbar" id={expandNavBar ? "open" : "close"}>
      <div className="toggleButton">
        <button onClick={() => setExpandNavBar((prev) => !prev)}>
          <IoMdReorder />
        </button>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/experience">Experience</Link>
      </div>
    </div>
  );
}

export default Navbar;
