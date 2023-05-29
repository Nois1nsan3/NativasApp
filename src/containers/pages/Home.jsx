import { Layout } from '../../hoc/layout/Layout'
import { Login } from '../../components/Login'
import { FormularioRegistro } from '../../components/FormularioRegistro'

export function Home () {
  return (
    <Layout>
      <h1>Home</h1>
      <Login />
      <FormularioRegistro />
    </Layout>
  )
}
