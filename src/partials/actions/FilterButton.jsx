import React, { useState, useRef, useEffect } from 'react';
import Transition from '../../utils/Transition';
import { useListGereja } from '../../components/stores';

function FilterButton() {
  const [state,actions ] = useListGereja();
  console.log(state);

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const trigger = useRef(null);
  const dropdown = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!dropdownOpen || dropdown.current.contains(target) || trigger.current.contains(target)) return;
      setDropdownOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });
  useEffect(() => {
    actions.loadData();
  }, []);

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  return (
    <div className="relative inline-flex">
      <select>
        <option>deedef</option>
        <option>deedef</option>
        <option>deedef</option>
      </select>
    </div>
  );
}

export default FilterButton;
