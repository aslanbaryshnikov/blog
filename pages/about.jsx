import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { getPageTitle } from "../utils/getPageTitle";

export default function About() {
  const { t } = useTranslation("common");

  return (
    <>
      <Head>
        <title>{getPageTitle(t, "aboutMe")}</title>
        <meta name="description" content={t("aboutMeDescription")} />
      </Head>

      <main>
        <h1>{t("aboutMe")}</h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eos illo illum optio
          perspiciatis possimus reprehenderit sed? A, quidem, velit?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos incidunt iusto magnam nobis
          non, veniam.
        </p>
      </main>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
