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
            onClick={props.setListType(props.allList)}
          />
          <label className="todoStatusLabel" for="all">
            All
          </label>
          <input
            id="active"
            type="radio"
            name="completeActiveAll"
            className="completeActiveAll"
            onClick={props.setListType(props.activeList)}
          />
          <label className="todoStatusLabel" for="active">
            Active
          </label>
          <input
            id="completed"
            type="radio"
            name="completeActiveAll"
            className="completeActiveAll"
            onClick={props.setListType(props.completedList)}
          />
          <label className="todoStatusLabel" for="completed">
            Completed
          </label>
        </form>
        <button className="clearComplete" onClick={props.clearComplete}>
          Clear Completed
        </button>
      </div>
  )
}

export default OptionsFooter