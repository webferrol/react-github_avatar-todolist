import PropTypes from 'prop-types'
export function CustomButton ({ children, onClick = () => {}, isLoading = false, ...props }) {
  return (
    <button
      onClick={onClick}
      className='relative px-4 py-2 text-white bg-blue-500 rounded disabled:bg-gray-500 disabled:cursor-not-allowed'
      disabled={isLoading}
      {...props}
    >
      {isLoading && (
        <div className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'>
          <div className='w-6 h-6 border-2 border-t-0 rounded-full border-gray-50 animate-spin' />
        </div>
      )}
      {children}
    </button>
  )
}

CustomButton.propTypes = {
  children: PropTypes.any,
  isLoading: PropTypes.bool,
  onClick: PropTypes.func
}
