import PropTypes from 'prop-types'
import TodoItem from './TodoItem'

export function TodoList ({ todo = [], onDeleteItem, onSelectItem }) {
  return (
    <ul className='grid w-80'>      {

        todo.map(item => (
          <TodoItem onSelectItem={onSelectItem} onDeleteItem={onDeleteItem} key={item?.id} itemValue={item} />
        ))
      }
    </ul>
  )
}

TodoList.propTypes = {
  todo: PropTypes.array,
  onDeleteItem: PropTypes.func.isRequired,
  onSelectItem: PropTypes.func.isRequired
}
