import { useRef, useState } from 'react'
import { useForm } from './useForm'
import { INITIAL_VALUE_GITHUB, END_POINT_URL } from '../constants'
import { getData } from '../helpers/getData'

export function useGithubAvatar () {
  const { user, handleChange } = useForm({ user: '' })
  const [userData, setUserData] = useState(INITIAL_VALUE_GITHUB)
  const loginRef = useRef(null)

  const { loading, avatar, login, errores } = userData

  const getGithubAvatar = async (url) => {
    const clone = structuredClone(INITIAL_VALUE_GITHUB)
    setUserData({
      ...clone,
      loading: true
    })

    try {
      const { avatar_url: urlAvatar, message, login } = await getData(url)
      // Si aparece la propiedad message no encontró el usuario
      if (message) throw new Error(message)
      clone.avatar = urlAvatar
      clone.login = login
    } catch (error) {
      clone.errores = error.message
    } finally {
      clone.loading = false
      setUserData(clone)
    }
  }

  const handleSubmit = event => {
    event.preventDefault()
    if (!user.length) {
      loginRef.current.focus()
      return
    }
    getGithubAvatar(END_POINT_URL + user)
    loginRef.current.select()
  }

  return {
    avatar,
    errores,
    handleChange,
    handleSubmit,
    loading,
    login,
    loginRef,
    user
  }
}
