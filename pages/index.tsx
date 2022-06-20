import { Footer, Header } from "@components/common";
import ApiIntegration from "@components/common/api-integration/ApiIntegration";
import { AppConstant } from "constant/AppConstant";
import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout className="page-home">
      {/* <Head>
        <title>{AppConstant.meta.title}</title>
        <meta name="description" content={AppConstant.meta.description} />
      </Head>
      <Header />
      <Footer /> */}
      <ApiIntegration />
    </Layout>
  );
};

export default Home;
