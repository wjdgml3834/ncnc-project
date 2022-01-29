import type { NextPage } from "next";
import Head from "next/head";
import { ShoppingBag } from "../components/ShoppingBag";

const Mylist: NextPage = () => {
  return (
    <div id="app">
      <Head>
        <title>장바구니</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ShoppingBag />
    </div>
  );
};

export default Mylist;