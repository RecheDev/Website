import Spotlight from "@/components/organisms/spotlight";
import Head from "next/head";
import Link from "next/link";

export const Header = () => {
  return (
    <>
      <Head>
        <title>Luis Reche — Junior Software Engineer</title>
        <meta name="description" content="Currently studying DAW at CESUR and Java at University of Helsinki" />
        <meta
          name="og:description"
          content="Currently studying DAW at Cesur and Java at University of Helsinki"
        />
        <meta property="og:image" content="https://jvidal.dev/og.png" />
        <meta name="author" content="@josepvidalvidal" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
        <meta content="summary" name="twitter:card" />
        <meta content="josepvidalvidal" name="twitter:site" />
        <meta content="josepvidalvidal" name="twitter:creator" />
        <meta content="https://josepvidal.dev" property="og:url" />
      </Head>
      <header>
        <nav className="flex items-center justify-between">
          <Link
            href="/"
            className="block bg-gradient-to-r from-primary to-accent w-8 h-8 transition border border-transparent hover:scale-105"
          >
            <span className="sr-only">rechedev.com</span>
          </Link>
          <Spotlight />
        </nav>
      </header>
    </>
  );
};

export default Header;
