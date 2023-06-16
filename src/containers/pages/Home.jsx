import { Layout } from '../../hoc/layout/Layout'
import { NavBar } from '../../components/NavBar'
import { Footer } from '../../components/Footer'

export function Home () {
  return (
    <Layout>
      <NavBar />
      <h1>Home</h1>
      <Footer />
    </Layout>
  )
}
