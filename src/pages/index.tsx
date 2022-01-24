import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div id="app">
      <Head>
        <title>ncnc-project</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="sr-only">니콘내콘 UI 개선 프로젝트 시작하겠습니다.</h1>
    </div>
  );
};

export default Home;
