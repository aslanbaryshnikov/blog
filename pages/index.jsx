import Head from "next/head";
import Link from "next/link";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export default function Home() {
  const { t } = useTranslation("common");

  return (
    <>
      <Head>
        <title>{t("siteName")}</title>
        <meta name="description" content={t("siteDescription")} />
      </Head>

      <main>
        <h1>{t("latestPosts")}</h1>

        {Array(5)
          .fill(0)
          .map((el, i) => (
            <article key={i}>
              <Link href="#">
                <a>
                  <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit</h3>
                </a>
              </Link>
              <div>
                <span>
                  {t("postedOn")} {new Date().toLocaleDateString()}
                </span>
                , <span>{t("likes", { count: 5 })}</span>,{" "}
                <span>{t("comments", { count: 5 })}</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias dolorum eos est
                impedit laboriosam minus sapiente sit veritatis. Non, tenetur.
              </p>
            </article>
          ))}

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "1rem",
            margin: "1rem 0",
          }}
        >
          <Link href="#">
            <a>{t("previousPage")}</a>
          </Link>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            {Array(5)
              .fill(0)
              .map((el, i) => (
                <Link href="#" key={i}>
                  <a>{i + 1}</a>
                </Link>
              ))}
            ...
            <Link href="#">
              <a>21</a>
            </Link>
          </div>
          <Link href="#">
            <a>{t("nextPage")}</a>
          </Link>
        </div>
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
