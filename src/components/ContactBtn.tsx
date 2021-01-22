import React from "react";

import { Link } from "react-router-dom";

export const ContactBtn: React.FC = () => {
  return (
    <Link className="contact-button" to="/contact">
      Contact <span className="million">M</span>e
    </Link>
  );
};
