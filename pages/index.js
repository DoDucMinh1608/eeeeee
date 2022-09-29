import Head from 'next/head.js'
import Nav from '../components/navbar.js'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta></meta>
      </Head>
      <Nav name="App" items={[
        { item: 'a', link: 'a' }, { item: 'b' }, { item: 'c' }
      ]} />
      <sidebar>

      </sidebar>
      <main>
      </main>
    </>
  )
}