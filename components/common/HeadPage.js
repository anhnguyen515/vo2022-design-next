import Head from "next/head";
import React from "react";

export default function HeadPage({ title }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Vietnovel Origin" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
    </>
  );
}
