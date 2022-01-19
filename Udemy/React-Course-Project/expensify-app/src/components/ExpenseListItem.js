import React from "react";
import { Link } from "react-router-dom";


const ExpenseListItem = ({id,createdAt,description,amount})=>(
    <div>
    <Link to={"/edit/"+id} ><h3>{description}</h3></Link>
    <p> Amount: {amount }  & Time of creation : {createdAt}</p>
    </div>
    )
  

export default ExpenseListItem;
