import React from 'react'

function OptionsFooter(props) {

  //Checks to see how many items are on the list, and makes "item" plural
  const [plural, setPlural] = useState("");

  useEffect(() => pluralize());

  function pluralize() {
    setPlural(() => {
      let countOverOne = [...props.todoList].filter(
        (todo) => !todo.complete
      ).length;
      if (countOverOne === 1) {
        return `${countOverOne} item left`;
      } else {
        return `${countOverOne} items left`;
      }
    });
  } 

 
    return (
    <div className="completedActiveOptions">
        <span className="todoCount">{plural}</span>
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