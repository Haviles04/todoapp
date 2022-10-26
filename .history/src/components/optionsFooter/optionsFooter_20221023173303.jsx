import React from 'react'

function OptionsFooter(props) {
 
    return (
    <div className="completedActiveOptions">
        <span className="todoCount"></span>
        <form>
          <input
            id="all"
            type="radio"
            name="completeActiveAll"
            className="completeActiveAll"
            onClick={setListType(allList)}
          />
          <label className="todoStatusLabel" for="all">
            All
          </label>
          <input
            id="active"
            type="radio"
            name="completeActiveAll"
            className="completeActiveAll"
            onClick={setListType(activeList)}
          />
          <label className="todoStatusLabel" for="active">
            Active
          </label>
          <input
            id="completed"
            type="radio"
            name="completeActiveAll"
            className="completeActiveAll"
            onClick={setListType(completedList)}
          />
          <label className="todoStatusLabel" for="completed">
            Completed
          </label>
        </form>
        <button className="clearComplete" onClick={clearComplete}>
          Clear Completed
        </button>
      </div>
  )
}

export default OptionsFooter