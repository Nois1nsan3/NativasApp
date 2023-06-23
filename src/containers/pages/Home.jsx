import { Layout } from '../../hoc/layout/Layout'
import { NavBar } from '../../components/NavBar'
import { Hero } from '../../components/Hero'
import { Footer } from '../../components/Footer'
import { Equipo } from '../../components/Equipo'

export function Home () {
  return (
    <Layout>
      <div className='bg-black h-screen flex flex-col'>
        <NavBar />
        <div className='h-screen flex-grow'>
          <Hero />
          <Equipo />
          <Footer />
        </div>
      </div>
    </Layout>
  )
}
