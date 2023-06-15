import { CustomButton, CustomInput, ImageSkeleton } from './components'
import { END_POINT_URL } from './constants'
import { useGithubAvatar } from './hooks/useGithubAvatar'

function GithubApp () {
  const {
    avatar,
    errores,
    handleChange,
    handleSubmit,
    loading,
    login,
    loginRef,
    user
  } = useGithubAvatar()
  return (
    <form className='flex flex-col items-center gap-4' onSubmit={handleSubmit}>
      <fieldset className='flex items-center gap-1'>
        <span>{END_POINT_URL}</span>
        <CustomInput
          ref={loginRef}
          name='user'
          value={user}
          placeholder='webferrol'
          onChange={handleChange}
        />
        <CustomButton isLoading={loading}>Cargar</CustomButton>
      </fieldset>
      <div>
        {loading && <ImageSkeleton />}
        {avatar && <img className='object-cover w-64 h-64' src={avatar} alt={login} />}
        {errores && <div className='p-4 text-white bg-red-500 rounded-md '>{errores}</div>}
      </div>
    </form>
  )
}

export default GithubApp
