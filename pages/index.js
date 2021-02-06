import Head from "next/head";
import PortfolioHome from "../components/home/home.component";

export default function Home() {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PortfolioHome />
    </div>
  );
}
