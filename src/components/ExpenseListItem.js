import React from 'react';
import {connect} from 'react-redux';
import { removeExpense } from '../actions/expenses';
import { Link } from "react-router-dom";

const ExpenseListItem = ({dispatch, id, description, amount, createdAt}, props) => (
    <div>
        <h3><Link to={`/edit/${id}`}>{description}</Link></h3>
        <p>{amount} &mdash; {createdAt}</p>
        <button onClick={ () => {
            dispatch(removeExpense({ id }));
        }}>Remove</button>
    </div>
);

export default connect()(ExpenseListItem);