import * as React from "react";
import Helmet from "react-helmet";

interface Props {}

const NotFoundPage: React.StatelessComponent<Props> = () => (
  <React.Fragment>
    <Helmet>
      <title>404 page not found</title>
    </Helmet>
    <h1>Page not found</h1>
    <p>That's all we know.</p>
  </React.Fragment>
);

export default NotFoundPage;
