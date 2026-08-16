import React from "react";

import { Link } from "react-router-dom";

export const ContactBtn: React.FC = () => {
  return (
    <Link className="contact-button" to="/contact">
      Get in touch
    </Link>
  );
};
