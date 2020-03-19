import App, { Container } from "next/app";

import "bootstrap/dist/css/bootstrap.css";
import CSS from "shards-ui/dist/css/shards.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
