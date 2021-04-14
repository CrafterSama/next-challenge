import React from 'react'
import Head from 'next/head'
import ProductList from '../components/ProductList'
import NavBar from '../components/NavBar'

const Home = () => {
    return (
      <>
        <Head>
          <title>Meru Cart Challenge - Products</title>
          <link rel="icon" href="/favicon.ico" />
          <meta charSet="utf-8" />
	        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta httpEquiv="Cache-Control" content="no-cache, mustrevalidate" />
          <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, shrink-to-fit=no" />
        </Head>
        <NavBar />
        <ProductList />
      </>
    )
}

export default Home