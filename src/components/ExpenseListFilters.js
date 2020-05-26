import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByAmount } from "../actions/filters";

const ExpenseListFilters = (props) => (
    <div>
    <input 
    type="text" 
    value={props.filter.text} onChange = {(e) => {
        props.dispatch(setTextFilter(e.target.value));
    } }
    /> 

    
    <select 
    value={props.filter.sortBy} 
    onChange={ (e) => {
        const field = e.target.value === 'date' ? 'date' : 'amount';
        if (field === 'date') props.dispatch(sortByDate());
        if (field === 'amount') props.dispatch(sortByAmount());
    } }
    >
    <option value="date">Date</option>
    <option value="amount">Amount</option>
    </select>
    </div>
);

const mapStateToProps = (state) => {
    return {
        filter : state.filters
    }
};

export default connect(mapStateToProps)(ExpenseListFilters);