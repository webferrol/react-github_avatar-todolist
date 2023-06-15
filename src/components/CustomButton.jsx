import PropTypes from 'prop-types'
import { useRef } from 'react'
export function CustomButton ({ onClick = () => {}, isLoading = false, children }) {
  const btnRef = useRef(null)
  const handleClick = () => {
    onClick(btnRef.current)
  }
  return (
    <button
      ref={btnRef}
      onClick={handleClick}
      className={`flex justify-normal gap-3 items-center bg-blue-500 w-auto text-white font-bold py-2 px-4 rounded ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'}`}
    >
      {children}
      {
        isLoading &&
          (
            <svg
              className='w-5 h-5 mr-3 -ml-1 text-white animate-spin'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
            >
              <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' />
              <path
                className='opacity-75'
                fill='currentColor'
                d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 2.48.996 4.735 2.618 6.383l3.382-3.092zM12 20a8 8 0 01-8-8H0c0 4.418 3.582 8 8 8v-2zm4.618-6.383A7.962 7.962 0 0112 12h-4a7.962 7.962 0 01-2.618 6.383l3.382 3.092zM20 12a8 8 0 01-2.618 6.383l3.382-3.092A7.962 7.962 0 0120 12h-4zm-7-5.291A7.962 7.962 0 0112 4v4a3.99 3.99 0 00-1 .133V4a8 8 0 017 4.618l-3.382 3.092zM12 20v2a8 8 0 008-8h-4c0 2.48-.996 4.735-2.618 6.383l-3.382-3.092zM18 9a3 3 0 11-6 0 3 3 0 016 0z'
              />
            </svg>
          )
          }

    </button>
  )
}

CustomButton.propTypes = {
  onClick: PropTypes.func,
  isLoading: PropTypes.bool,
  children: PropTypes.any
}
