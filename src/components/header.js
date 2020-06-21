import React from "react";
import { Helmet } from "react-helmet";

export default (props) => (
  <Helmet
      htmlAttributes={{
          lang: 'ja',
      }}
      title={ (props.title ? props.title + ' | ' : '') + "my SBUX"  }
      >
      <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
    </Helmet>
);

