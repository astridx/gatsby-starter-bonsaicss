import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function NotFoundPage() {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <div>
        <p>
          Looks like there is nothing but a bonsai here. Are you sure the url is
          correct?
        </p>
        <img
          alt="bonsai"
          src="https://images.unsplash.com/photo-1536727510301-a2e7a31bb6cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        />
      </div>
    </Layout>
  );
}

export default NotFoundPage;
