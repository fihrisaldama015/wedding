import Head from "next/head";
import Benefits from "../components/benefits";
import Header from "../components/header";
import Pricing from "../components/pricing";

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>Platform Undangan Digital</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Benefits />
        <Pricing />
      </main>
    </div>
  );
};

export default Home;
