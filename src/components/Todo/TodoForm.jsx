import PropTypes from 'prop-types'
import { useRef, useState } from 'react'

export function TodoForm ({ onAddTodo }) {
  const [item, setItem] = useState('')
  const [disabled, setDisabled] = useState(true)
  const addRef = useRef(null)

  const classBoton = disabled ? 'bg-blue-500' : 'bg-blue-700'

  const handleChange = e => {
    setItem(e.target.value)
    if (e.target.value.length) { setDisabled(false) } else { setDisabled(true) }
  }

  const handleSubmit = e => {
    e.preventDefault()
    onAddTodo(item)
    addRef.current.select()
  }
  return (
    <form onSubmit={handleSubmit}>
      <fieldset className='flex items-center gap-1'>
        <input
          ref={addRef}
          className='px-2 py-1 border border-red-900 rounded'
          type='text'
          value={item}
          onChange={handleChange}
        />
        <button
          disabled={disabled}
          className={`px-2 py-1 text-white ${classBoton} border rounded-full`}
        >Añadir
        </button>
      </fieldset>
    </form>
  )
}

TodoForm.propTypes = {
  onAddTodo: PropTypes.func
}
