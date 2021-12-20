import "../styles/globals.css";
import "../styles/Header.css";
import "../styles/Content.css";
import "../styles/Footer.css";
import "../styles/PageEnd.css"
import "../styles/MobileMenu.css"
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
