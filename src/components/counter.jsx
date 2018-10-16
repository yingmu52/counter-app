import React from 'react';

const formatCount = (counter) => {
  const { value } = counter;
  return value === 0 ? 'Zero' : value;
}

const getBadgeClasses = ({ value }) => {
  let classes = 'badge m-2 badge-';
  classes += value === 0 ? 'warning' : 'primary';
  return classes;
}

const Counter = ({ onIncrement, onDelete, counter }) => {
  return (
    <div>
      <span className={getBadgeClasses(counter)}>{formatCount(counter)}</span>
      <button
        onClick={() => onIncrement(counter)}
        className='btn btn-secondary btn-sm'> Increment
        </button>
      <button
        onClick={() => onDelete(counter.id)}
        className="btn btn-danger btn-sm m-2">Delete
        </button>
    </div>
  );
}



export default Counter;