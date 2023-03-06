import Link from "next/link";
import Head from 'next/head'
import axios from "axios";
import { useState } from "react";

export default function First() {
  const [data, setData] = useState<string>("")

  const fetchData = async () => {
    if (!data) {
      let res = await axios.get("/api/hello")
      setData(res.data.name)
    }
  }

  return (
    <>
      <Head>
        <title>Cycle Meetup</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>I exist as the first page</h1>
      <Link href="/">Click me</Link>
      <button onClick={fetchData}>Send API request</button>
      {data && <p>{data}</p>}
    </>
  )
}