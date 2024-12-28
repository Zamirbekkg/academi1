import React from 'react';
import { FaFilter } from 'react-icons/fa';
import './Filter.scss';

const Filter = ({ filter, setFilter }) => {
  const [showFilter, setShowFilter] = React.useState(false);
  const [isTextVisible, setIsTextVisible] = React.useState(false);

  const handleFilterToggle = () => {
    setShowFilter(!showFilter);
    setIsTextVisible(!isTextVisible);
  };

  return (
    <div className="filter-container">
      <button className="filter-button" onClick={handleFilterToggle}>
        <FaFilter className="filter-icon" />
        <span
          className={`button-text ${isTextVisible ? 'slide-in' : 'slide-out'}`}
        >
          Фильтрация
        </span>
      </button>
      {showFilter && (
        <div className="filter-input animated">
          <input
            type="text"
            placeholder="Введите имя..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>
      )}
    </div>
  );
};

export default Filter;
