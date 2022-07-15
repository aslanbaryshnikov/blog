import { appWithTranslation } from "next-i18next";
import "../styles/globals.scss";
import "../styles/themes.scss";
import ThemeContextProvider from "../context/theme/ThemeContextProvider";
import Header from "../components/Header";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeContextProvider>
      <div className="container">
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </ThemeContextProvider>
  );
}

export default appWithTranslation(MyApp);
