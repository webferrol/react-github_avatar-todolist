import PropTypes from 'prop-types'

export function TodoOptions ({ onDeleteAll, onSelectAll }) {
  return (
    <fieldset className='flex items-center gap-2'>
      <button
        onClick={onSelectAll}
        className='px-2 py-1 text-white bg-blue-500 border rounded-full hover:bg-blue-700'
      >Seleccionar todo
      </button>
      <button
        onClick={onDeleteAll}
        className='px-2 py-1 text-white bg-red-700 border rounded-full'
      >Eliminar todo
      </button>
    </fieldset>
  )
}

TodoOptions.propTypes = {
  onDeleteAll: PropTypes.func.isRequired,
  onSelectAll: PropTypes.func.isRequired
}
