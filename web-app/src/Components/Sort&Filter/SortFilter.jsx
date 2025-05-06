import React from 'react';
import './SortFilter.css';
import { useDispatch, useSelector } from 'react-redux';
import { closeSortPanel } from '../../Redux/counter/counterSlice';
import SortRadio from '../Reuseable/SortRadio';
import SortDown from '../Reuseable/SortDown';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
const SortFilter = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(state => state.counter.isSortPanelOpen);
  const navigate = useNavigate();

  const location = useLocation();
const currentSort = location.pathname.split('/')[2];

  const handleSortChange = (sortType) => {
    navigate(`/all-product/${sortType}`);
    dispatch(closeSortPanel());
  };

  return (
    <div className={`sort ${isOpen ? 'open' : ''}`}>
      <div className="sort-headline">
        <h1>SORT AND FILTER</h1>
        <svg  onClick={() => dispatch(closeSortPanel())}  style={{ cursor: 'pointer' }} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M256-213.85 213.85-256l224-224-224-224L256-746.15l224 224 224-224L746.15-704l-224 224 224 224L704-213.85l-224-224-224 224Z"/></svg>
      </div>
      <div className="sort-input">
      <div className="sort-sortby">SORT BY</div>
        <SortRadio label={'Position'} type={'radio'} />
        <SortRadio label={'Product Name'} type={'radio'} checked={currentSort === 'sort-by-category'} onChange={() => handleSortChange('sort-by-category')} />
        <SortRadio label={'Price'} type={'radio'} checked={currentSort === 'sort-by-price'} onChange={() => handleSortChange('sort-by-price')} />
      </div>
      <div className="sort-down">
        <SortDown label={'Gender'}  />
        <SortDown label={'Product Type'} />
        <SortDown label={'Fit'} />
        <SortDown label={'Price'} />
        <SortDown label={'Sleeves'} />
        <SortDown label={'Size'} />
      </div>
    </div>
  );
};

export default SortFilter;
