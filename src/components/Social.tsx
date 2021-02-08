import React from "react";

// ICONS
import {
  ContactIcon,
  TwitterIcon,
  DevIcon,
  GithubIcon,
  InstagramIcon,
  LinkedInIcon,
} from "../util/icons";

const DATA = [
  { href: "mailto:max.coghlan@gmail.com", icon: ContactIcon },
  { href: "https://twitter.com/kaxMoglan", icon: TwitterIcon },
  { href: "https://dev.to/kaxmoglan", icon: DevIcon },
  { href: "https://github.com/kaxmoglan", icon: GithubIcon },
  { href: "https://instagram.com/kaxmoglan", icon: InstagramIcon },
  { href: "https://www.linkedin.com/in/maxcoghlan/", icon: LinkedInIcon },
];

const Social: React.FC = () => {
  return (
    <div className="social">
      {DATA.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          className="link"
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default Social;
