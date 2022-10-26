import React from 'react'

function TaskInput() {
  return (
    <div>
        <form>
            <input className='todoInput' type="text" placeholder='Enter Task'></input>
            <button type="submit"></button>
        </form>
    </div>
  )
}

export default TaskInput