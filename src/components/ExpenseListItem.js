import React from 'react';
import moment from 'moment';
import { Link } from "react-router-dom";
import numeral from 'numeral';

export const ExpenseListItem = ({id, description, amount, createdAt}) => (
    <div>
        <h3><Link to={`/edit/${id}`}>{description}</Link></h3>
        <p>
        {numeral(amount).format('$0,0.00').replace('$','Rs ')}
         &mdash; 
         {moment(createdAt).format('MMMM Do, YYYY')}
         </p>
    </div>
);

export default ExpenseListItem;