import React from "react";
import Link from "next/link";
import { ThemeContext } from "../context/theme/ThemeContext";
import { themes } from "../const/theme";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

const Header = () => {
  const { t } = useTranslation("common");
  const { locale, locales } = useRouter();

  return (
    <>
      <header>
        <Link href="/">
          <a>
            <h2>{t("siteName")}</h2>
          </a>
        </Link>
        <p>{t("siteDescription")}</p>
        <nav>
          <ul
            style={{
              display: "flex",
              gap: "1rem",
              listStyle: "none",
              paddingLeft: 0,
            }}
          >
            <li>
              <Link href="/" replace>
                <a>{t("blog")}</a>
              </Link>
            </li>
            <li>
              <Link href="/about" replace>
                <a>{t("aboutMe")}</a>
              </Link>
            </li>
            <li>
              <Link href="/contact" replace>
                <a>{t("contact")}</a>
              </Link>
            </li>
            <li style={{ marginLeft: "auto" }}>
              <ThemeContext.Consumer>
                {({ theme, toggleTheme }) => (
                  <Link href="">
                    <a onClick={toggleTheme}>
                      {theme === themes.light ? t("darkMode") : t("lightMode")}
                    </a>
                  </Link>
                )}
              </ThemeContext.Consumer>
            </li>
            {locales
              .filter((item) => item !== locale)
              .map((item) => (
                <li key={item}>
                  <Link href="" locale={item}>
                    <a>{item.toUpperCase()}</a>
                  </Link>
                </li>
              ))}
            <li>
              <form>
                <input type="search" placeholder={t("searchPlaceholder")} />{" "}
                <button type="submit">{t("search")}</button>
              </form>
            </li>
          </ul>
        </nav>
      </header>

      <hr />
    </>
  );
};

export default Header;
