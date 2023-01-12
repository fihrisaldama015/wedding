import Head from "next/head";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
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
        <Footer />
        {/* <a
          target="_blank"
          href="https://icons8.com/icon/60952/add-shopping-cart"
        >
          Add Shopping Cart
        </a>{" "}
        icon by{" "}
        <a target="_blank" href="https://icons8.com">
          Icons8
        </a> */}
      </main>
    </div>
  );
};

export default Home;
