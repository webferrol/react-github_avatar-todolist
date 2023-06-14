import PropTypes from 'prop-types'

function TodoItem ({ itemValue, onDeleteItem, onSelectItem }) {
  const { id, task, checked } = itemValue
  const classBoton = checked ? 'bg-red-700' : 'bg-red-500'
  const handleChange = () => {
    onSelectItem(id)
  }
  const handleDelete = () => {
    onDeleteItem(id)
  }
  return (
    <li className='flex items-center justify-between p-2 border-b-2'>
      <div>
        <input
          onChange={handleChange}
          checked={checked}
          className='mr-2'
          type='checkbox'
        />
        {task}
      </div>
      <button
        onClick={handleDelete}
        disabled={!checked}
        className={`px-2 py-1 text-white ${classBoton} border rounded-full`}
      >Eliminar
      </button>
    </li>
  )
}

TodoItem.propTypes = {
  itemValue: PropTypes.object,
  onDeleteItem: PropTypes.func.isRequired,
  onSelectItem: PropTypes.func.isRequired
}

export default TodoItem
