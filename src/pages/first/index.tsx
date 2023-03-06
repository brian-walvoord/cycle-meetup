import Link from "next/link";
import Head from 'next/head'


export default function First() {
  return (
    <>
      <Head>
        <title>Cycle Meetup</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>I exist as the first page</h1>
      <Link href="/">Click me</Link>
    </>
  )
}