import React from "react";
import Habit from "./habit";
import HabitAddForm from "./habitAddForm";

/*const Habits = (props) => (
  <div className="habits">
    <HabitAddForm onAdd={props.onAdd} />
    <ul>
      {props.habits.map((habit) => (
        <Habit
          key={habit.id}
          habit={habit}
          onIncrement={props.onIncrement}
          onDecrement={props.onDecrement}
          onDelete={props.onDelete}
        />
      ))}
    </ul>
    <button className="habits-reest" onClick={props.onReset}>
      Reset All
    </button>
  </div>
);*/

const Habits = ({
  habits,
  onIncrement,
  onDecrement,
  onDelete,
  onAdd,
  onReset,
}) => {
  return (
    <div className="habits">
      <HabitAddForm onAdd={onAdd} />
      <ul>
        {habits.map((habit) => (
          <Habit
            key={habit.id}
            habit={habit}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onDelete={onDelete}
          />
        ))}
      </ul>
      <button className="habits-reest" onClick={onReset}>
        Reset All
      </button>
    </div>
  );
};

export default Habits;
