import React from "react";

// IMPORT IMAGES

import desktopImg from "../../images/dist/projects/modern-calligraphy/modern-calligraphy-desktop.png";

import tabletImg from "../../images/dist/projects/modern-calligraphy/modern-calligraphy-tablet.png";

import mobileImg from "../../images/dist/projects/modern-calligraphy/modern-calligraphy-mobile.png";

import wholesaleImg from "../../images/dist/projects/modern-calligraphy/modern-calligraphy-wholesale.png";

import {
  BootstrapIcon,
  HtmlIcon,
  NodeIcon,
  LaravelIcon,
  JavascriptIcon,
  WordpressIcon,
  PhpIcon,
  SassIcon,
} from "../icons";

export default {
  url: "the-modern-calligraphy-studio",
  name: ["THE", "MODERN", "CALLIGRAPHY", "STUDIO"],
  workShort: ["Design", "Development"],
  workExpanded: [
    "UI/UX Design",
    "Front End Development",
    "Back End Development",
  ],
  links: {
    project: "/projects/projectname",
    app: "https://www.themoderncalligraphystudio.com",
    github: "https://github.com/kaxmoglan/the-modern-calligraphy-studio",
    next: "",
    previous: "",
  },
  tech: [
    "Wordpress",
    "WooCommerce",
    "PHP",
    "Laravel Mix",
    "Sass",
    "HTML5",
    "Bootstrap",
    "Node.js",
    "Javascript",
    "SQL",
  ],
  icons: [
    SassIcon,
    HtmlIcon,
    NodeIcon,
    LaravelIcon,
    JavascriptIcon,
    WordpressIcon,
    PhpIcon,
    BootstrapIcon,
  ],
  subheading: "UI/UX | Front End | Back End",
  description:
    "A fully user-editable e-commerce solution, complete with a wholesale customer section including individual accounts, pricing, shipping options and minimum order values.",
  mobileImg: {
    src: mobileImg,
    alt: "THIS IS THE ALT TEXT",
  },
  tabletImg: {
    src: tabletImg,
    alt: "THIS IS THE ALT TEXT",
  },
  desktopImg: {
    src: desktopImg,
    alt: "THIS IS THE ALT TEXT",
  },
  content: (
    <div className="project-body">
      <div className="narrow">
        <h2>THE BRIEF</h2>
        <p>
          The Modern Calligraphy Studio wanted a fully editable e-commerce
          solution built in Wordpress with WooCommerce. The design brief was for
          the site to be clean, modern and bright with the user-focus on their
          products. They also wanted their Wholesale Customers to be able to log
          in to see their wholesale catalogue with custom pricing, shipping
          rates and minimum order values.{" "}
        </p>
      </div>

      <div className="wide">
        <div className="container">
          <img src={wholesaleImg} alt="" />

          <div className="text">
            <h2>The Solution</h2>
            <p>
              I designed the site in Adobe XD and, upon approval, built a
              Wordpress theme using PHP, Sass, Javascript and the Bootstrap
              grid, compiled using Laraval Mix and Node.js. All customers are
              able to log in with fully styled gateways and redirects based on
              their account type, sign up to Mail Chimp mailing lists with
              bespoke sign-up forms and AJAX calls (so there are no redirects to
              Mail Chimp), and payment gateways that never leave the site.
            </p>

            <p>
              I also used some freely available plugins for additional features
              like minimum order quantities per user-role and wholesale pricing.
            </p>
          </div>
        </div>
      </div>

      <div className="narrow">
        <h2>THE RESULT</h2>
        <p>
          The Modern Calligraphy Studio now have a fully editable, maintainable
          and scaleable e-commerce solution with a backend they’re familiar
          with. Custom user roles ensure their wholesale customers always have
          an up-to-date catalogue, and they’re able to take all payments upfront
          without even having to send an invoice.
        </p>
        <p>
          On top of fulfilling the brief, I incorporated a bespoke JS menu, an
          animated loader on selected pages, a pop-up search box that searches
          all WooCommerce product names, SKUs, tags and categories, and custom
          icons I asked the client to create to achieve a truly unique result. I
          also utilised the Bootstrap grid system so that it was easy for the
          client (or myself) to change or create powerful page layouts using
          Bootstrap classnames from within the Gutenberg editor.
        </p>
      </div>
    </div>
  ),
};
