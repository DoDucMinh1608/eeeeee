import Head from 'next/head.js'
import Nav from '../components/navbar.js'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Nav name="App" items={[
        { link: '/account', title: 'Account' }
      ]} />
    </>
  )
}