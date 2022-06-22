import React from "react";
import Head from "next/head";

import styles from "./layout.module.css";

function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Sinan's Website</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1 className={styles.bigTitle}>The Rick and Morty Cards</h1>

      <main>{children}</main>
    </div>
  );
}

export default Layout;
