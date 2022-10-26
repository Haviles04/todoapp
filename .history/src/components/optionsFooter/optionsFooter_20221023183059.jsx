import React from 'react'


function OptionsFooter(props) {



 
    return (
    <div className="completedActiveOptions">
        <span className="todoCount">{props.plural}</span>
        <form>
          <input
            id="all"
            type="radio"
            name="completeActiveAll"
            className="completeActiveAll"
            onClick={ () => props.setListType(props.allList)}
          />
          <label className="todoStatusLabel" htmlFor="all">
            All
          </label>
          <input
            id="active"
            type="radio"
            name="completeActiveAll"
            className="completeActiveAll"
            onClick={ () => props.setListType(props.activeList)}
          />
          <label className="todoStatusLabel" htmlFor="active">
            Active
          </label>
          <input
            id="completed"
            type="radio"
            name="completeActiveAll"
            className="completeActiveAll"
            onClick={ () => props.setListType(props.completedList)}
          />
          <label className="todoStatusLabel" htmlFor="completed">
            Completed
          </label>
        </form>
        <button className="clearComplete" onClick={ () => props.clearComplete}>
          Clear Completed
        </button>
      </div>
  )
}

export default OptionsFooter