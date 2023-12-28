import './App.css'

import AddTodo from './components/AddTodo'
import Todos from './components/Todos'


function App() {

  return (
    <>
      <AddTodo />
      <hr className='mt-8' />
      <div className='text-3xl m-5 underline text-gray-800 font-bold'>Todos</div>
      <Todos />
    </>
  )
}

export default App
