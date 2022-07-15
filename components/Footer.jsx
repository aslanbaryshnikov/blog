import React from "react";
import { useTranslation } from "next-i18next";
import Link from "next/link";

const Footer = () => {
  const { t } = useTranslation("common");

  return (
    <>
      <hr />

      <footer
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span>
          {new Date().getFullYear()} &copy; {t("siteName")}
        </span>
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
              <Link href="https://github.com/aslanbaryshnikov/">
                <a target="_blank" rel="nofollow noreferrer noopener">
                  {t("gitHub")}
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://t.me/aslanbaryshnikov">
                <a target="_blank" rel="nofollow noreferrer noopener">
                  {t("telegram")}
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
