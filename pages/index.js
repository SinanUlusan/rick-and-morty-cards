import React from "react";
import unfetch from "isomorphic-unfetch";
import Head from "next/head";

import styles from "../components/layout.module.css";
import Cards from "../components/cards";
import Layout from "../components/layout";

function HomePage({ ...props }) {
  return (
    <Layout>
      <Head>
        <title>Home Page</title>
      </Head>
      <Cards {...props} />
    </Layout>
  );
}

export async function getStaticProps() {
  const data = await unfetch("https://rickandmortyapi.com/api/character");

  const characters = await data.json();

  return {
    props: {
      characters: characters,
    },
  };
}

export default HomePage;
