import { Layout } from '../../hoc/layout/Layout'
import { NavBar } from '../../components/NavBar'
import { Footer } from '../../components/Footer'
import { FormNoticia } from '../../components/FormNoticia'

export function AdmPage () {
  return (
    <Layout>
      <NavBar />
      <h1>AdmPage</h1>
      <FormNoticia />
      <Footer />
    </Layout>
  )
}
