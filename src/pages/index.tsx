import Head from 'next/head'
import Link from 'next/link'
import axios from "axios";

export default function Home() {

  const getUsers = async () => {
    //send api request
    let res = await axios.get("/api/get-users")
    //print the api response
    console.log(JSON.stringify(res.data))
  }

  const addUser = async () => {
    let res = await axios.post("/api/add-users")
    console.log(res.data)
  }

  return (
    <>
      <Head>
        <title>Cycle Meetup</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>I'm the initial loading page</h1>
        <div>
          <Link href="/first">Click me</Link>
        </div>
        <button onClick={getUsers}>Get Prisma Users</button>
        <button onClick={addUser}>Add Prisma User</button>
      </main>
    </>
  )
}
