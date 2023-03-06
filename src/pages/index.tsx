import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Cycle Meetup</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>I'm the homepage</h1>
        <div>
          <Link href="/first">Click me</Link>
        </div>
      </main>
    </>
  )
}
