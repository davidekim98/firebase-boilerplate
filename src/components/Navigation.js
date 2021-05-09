import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => (
  <nav>
    <ul style={{ display: "flex", justifyContent: "center", marginTop: 50 }}>
      <li>
        <Link to="/">
          Home
        </Link>
      </li>
    </ul>
  </nav>
);
export default Navigation;