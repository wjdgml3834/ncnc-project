import type { NextPage } from "next";
import styled from "@emotion/styled";
import Head from "next/head";
import { Header } from "../components/Detail/Header";
import { Main } from "../components/Detail/Main";
import { Footer } from "../components/Detail/Footer";

const Detail: NextPage = () => {
  return (
    <div id="app">
      <Head>
        <title>상품 상세 페이지</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Detail;
