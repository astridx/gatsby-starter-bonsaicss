import PropTypes from "prop-types";
import React from "react";
import "../../node_modules/bonsai.css/dist/bonsai.css";
import "../css/style.css";

import Header from "./header";

function Layout({ children }) {
  return (
    <div
      style={{
        "--maxw": "100%",
        "--m2": "20px auto",
        "--p": "0 3vw",
        "--bg": "#f5f5f5",
        "--c": "#202020",
      }}
    >
      <Header />

      <main>{children}</main>

      <footer className="primary">
        <nav>
          <p>
            Created by{` `}
            <a
              href="https://astrid-guenther.de"
              target="_blank"
              rel="noopener noreferrer"
            >
              Astrid Günther
            </a>
          </p>

          <p>
            <a
              href="https://github.com/astridx/gatsby-starter-bonsaicss"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </p>
        </nav>
      </footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
