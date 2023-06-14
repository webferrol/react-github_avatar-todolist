import { CustomButton, CustomInput } from './components'
import { useForm } from './hooks/useForm'
import { getData } from './helpers/getData'
import { END_POINT_URL } from './constants'
import { useRef, useState } from 'react'

const initialValue = {
  loading: false,
  avatar: '',
  errores: null
}

function GithubApp () {
  const { user, handleChange } = useForm({ user: '' })
  const [userData, setUserData] = useState(initialValue)

  const { loading, avatar, errores } = userData
  const loginRef = useRef(null)

  const handleSubmit = async event => {
    event.preventDefault()
    if (!user.length) {
      loginRef.current.focus()
      return
    }

    setUserData(initialValue)

    console.log(initialValue)
    const clone = structuredClone(userData)

    const url = END_POINT_URL + user
    try {
      const { avatar_url: urlAvatar, message } = await getData(url)
      // Si aparece la propiedad message no encontró el usuario
      if (message) throw new Error(message)
      clone.avatar = urlAvatar
    } catch (error) {
      clone.errores = error.message
    } finally {
      clone.loading = false
      setUserData(clone)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset className='flex items-center gap-1'>
        <span>
          {
            END_POINT_URL
          }
        </span>
        <CustomInput
          ref={loginRef}
          name='user'
          value={user}
          placeholder='webferrol'
          onChange={handleChange}
        />
      </fieldset>
      <CustomButton>Cargar</CustomButton>
      {
        loading && 'Cargando......................................'
      }
      {
        errores
      }
      <img src={avatar} alt="" />
    </form>
  )
}

export default GithubApp
