import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { getPageTitle } from "../utils/getPageTitle";

export default function Contact() {
  const { t } = useTranslation("common");

  return (
    <>
      <Head>
        <title>{getPageTitle(t, "contact")}</title>
        <meta name="description" content={t("contactDescription")} />
      </Head>

      <main>
        <h1>{t("contact")}</h1>

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
