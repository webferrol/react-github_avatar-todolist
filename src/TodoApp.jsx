import { TodoForm, TodoList, TodoOptions } from './components/Todo'
import { useTodo } from './hooks/useTodo'

function TodoApp () {
  const {
    handleAddTodo,
    handleDeleteAll,
    handleDeleteItem,
    handleSelectAll,
    handleSelectItem,
    getTodos
  } = useTodo([{ id: 1, task: 'Cortar pelo', checked: true }])

  const todoArray = getTodos()
  return (
    <>
      <section className='grid gap-5'>
        <h1 className='text-4xl font-bold'>Todo List</h1>
        <TodoForm onAddTodo={handleAddTodo} />
        {
          Boolean(todoArray.length) &&
            (
              <>
                <TodoList todo={todoArray} onSelectItem={handleSelectItem} onDeleteItem={handleDeleteItem} />
                <TodoOptions onDeleteAll={handleDeleteAll} onSelectAll={handleSelectAll} />
              </>

            )
        }

      </section>
    </>
  )
}

export default TodoApp
