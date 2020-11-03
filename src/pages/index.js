import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function IndexPage() {
  return (
    <Layout>
      <SEO keywords={[`gatsby`, `bonsai`, `react`, `bonsaicss`]} title="Home" />

      <section style={{ "--ta": "center" }}>
        <h2>Hey there! Welcome to the Gatsby starter for bonsai.css.</h2>

        <p>
          This is a barebones starter for Gatsby styled using{` `}
          <a
            className="font-bold text-gray-900 no-underline"
            href="https://www.bonsaicss.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bonsai CSS
          </a>
          , a utility-first CSS framework.
        </p>

        <figure
          style={{
            "--maxw": "500px",
            "--levitate": "3",
            "--p": "10px --br:5px;",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1536727510301-a2e7a31bb6cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
            alt="sample"
            style={{ "--m": "2rem auto 0", "--br": "50%" }}
          />
          <figcaption style={{ "--ta": "center" }}>
            <h4>Bonsai</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
              odio. Quisque volutpat mattis eros.
            </p>
          </figcaption>
        </figure>
      </section>
    </Layout>
  );
}

export default IndexPage;
