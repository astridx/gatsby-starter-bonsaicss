import { graphql, useStaticQuery, Link } from "gatsby";
import React from "react";

import logo from "../images/bonsaicss-icon.png";

function Header() {
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <header>
      <div className="grid" style={{ "--col": "2" }}>
        <Link to="/">
          <h1
            className="primary"
            style={{ "--m": "40px auto 0", "--d": "block" }}
          >
            <img
              src={logo}
              alt="bonsaicss"
              style={{ "--d": "inline", "--maxh": "70px" }}
            />
            <span>{site.siteMetadata.title}</span>
          </h1>
        </Link>

        <nav style={{ "--m": "40px auto 0", "--d": "block" }}>
          {[
            {
              route: `/about`,
              title: `About`,
            },
            {
              route: `/contact`,
              title: `Contact`,
            },
          ].map((link) => (
            <Link
              key={link.title}
              to={link.route}
              className="grid"
              style={{ "--m": "20px", "--d-md": "inline", "--d-sm": "block" }}
            >
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
