import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import logo from "../images/bonsaicss-icon.png";

function ContactPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `bonsai`, `react`, `bonsaicss`]}
        title="Contact"
      />
      <section>
        <header
          className="home-header"
          style={{ "--pos": "relative", "--z": "1" }}
        >
          <div
            style={{
              "--d": "flex",
              "--fd": "column",
              "--ai": "center",
              "--jc": "center",
              "--mb": "2rem",
            }}
          >
            <img
              src={logo}
              alt="bonsaicss"
              style={{ "--m": "2rem auto 0", "--d": " block;" }}
            />
            <h1 style={{ "--ta": " center", "--mb": "0", "--m": "5rem" }}>
              bonsai.css
            </h1>
            <h4
              style={{
                "--ta": " center",
                "--mw": " 450px",
                "--m": " auto auto .5rem",
                "--px": "1rem",
              }}
            >
              A Utility Complete CSS Framework for less than 45kb (
              <strong>8kb Gzipped</strong>)
            </h4>
            <div style={{ "--p": ".5rem", "--ta": "center" }}>
              <a href="https://www.bonsaicss.com/#learn-more">
                <button className="white">Learn More</button>
              </a>
              <a href="https://www.bonsaicss.com/docs/getting-started/installation/">
                <button>Getting Started</button>
              </a>
              <a href="https://github.com/bonsaicss/bonsai.css">
                <button style={{ "--bg": "#282c34" }}>Github</button>
              </a>
            </div>
          </div>
        </header>
      </section>
    </Layout>
  );
}

export default ContactPage;
