import { getCookie } from 'cookies-next'
import { verifica } from '../services/user'

export default function Home() {
  return (
    <div>
     Pagina segura do usuario
    </div>
  )
}

export const getServerSideProps = async ({req , res}) => {
  try {
    const token = getCookie('authorization', {req , res})
    if (!token) throw new Error('Token Inváido')

    verifica(token)
    return {
      props: {}
    }
  } catch (error) {
    return {
      redirect: {
        permanent: false,
        destination: '/login'
      },
      props: {}
    }
  }
}