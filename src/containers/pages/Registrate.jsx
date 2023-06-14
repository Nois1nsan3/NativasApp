import registerImg from '../../assets/Roller_Form.png'
import { FormularioRegistro } from '../../components/FormularioRegistro'
import { Layout } from '../../hoc/layout/Layout'
import { app } from '../../firebase'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

export function Registrate () {
  const handleRegistro = async (correo, password) => {
    const auth = getAuth(app)

    await createUserWithEmailAndPassword(auth, correo, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user
        console.log(user)
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log(errorCode)
        console.log(errorMessage)
      })
  }

  return (
    <Layout>
      <div className='flex h-screen w-full overflow-hidden'>
        <picture className='w-2/5 h-full filtro'>
          <img src={registerImg} alt='Register' className='w-full h-full' />
        </picture>
        {/* contenedor del formulario */}
        <div className='w-3/5 h-full flex justify-center items-center'>
          {/* <FormularioRegistro /> */}
          <FormularioRegistro handleRegistro={handleRegistro} />
        </div>
      </div>
    </Layout>
  )
}
