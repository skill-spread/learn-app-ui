import type { NextPage } from 'next'
import Head from 'next/head'
import styled from 'styled-components'

const Container = styled.div`
  padding: 0 2rem;
`

const Main = styled.main`
  min-height: 100vh;
  padding: 4rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>Hello!</Main>
    </Container>
  )
}

export default Home
