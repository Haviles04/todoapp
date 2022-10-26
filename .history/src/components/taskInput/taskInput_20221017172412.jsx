import React from 'react'

function TaskInput() {
  return (
    <div>
        <form>
            <input className='taskInput' type="text" placeholder='Enter Task'></input>
            <button className='taskBtn' type="submit"></button>
        </form>
    </div>
  )
}

export default TaskInput