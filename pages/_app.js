import "../styles/globals.scss";
import "@fontsource/ibm-plex-mono";
import "@fontsource/saira-stencil-one";
import 'bootstrap/dist/css/bootstrap.css';

import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

function MyApp({ Component, pageProps }) {
  
  return <Component {...pageProps} />
}

export default MyApp
